import { Buyer } from "./schema";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { Request, Response } from "express";
import { BuyerSignupDto, BuyerLoginDto } from "./dto/buyer.dto";
import { validateDto } from "../../services/validateDto";
import errorHandler from "../../http/errorHandler";
import ApiError from "../../http/ApiError";
import bcrypt from "bcrypt";
import { cookieOptions } from "../..";

dotenv.config();

const SC = `${process.env.JWT_SECRET_KEY}`;

/**
 * @param password - takes password to hash
 * @returns returns the hased password
 */
async function hashPassword(password: string) {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new ApiError(400, "Error hashing password");
  }
}

/**
 * @param plainPassword - takes the plain input password to verify
 * @param hashedPassword - the actual hashed password to match
 * @returns true or false
 */
async function verifyPassword(plainPassword: string, hashedPassword: string) {
  try {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
  } catch (error) {
    throw new ApiError(400, "Error verifying password");
  }
}

/**
 * @param req - Request object for singup
 * @param res - Response object for signup
 * @returns Creates a new account for buyer and returns a json response
 */
const signup = async (req: any, res: Response) => {
  try {
    const buyerDto = await validateDto(BuyerSignupDto, req.body);
    const hashedPassword = await hashPassword(buyerDto.password);
    buyerDto.password = hashedPassword;
    await Buyer.create({
      ...buyerDto,
    });

    return res.status(200).json({
      message: "Account created successfully",
    });
  } catch (error: any) {
    return errorHandler(res, error);
  }
};

/**
 * @param req - Request object for login
 * @param res - Response object for login
 * @returns checks the user presence and matches the password
 */
const login = async (req: any, res: Response) => {
  try {
    const body = await validateDto(BuyerLoginDto, req.body);
    const user = await Buyer.findOne({ phoneNo: body.phoneNo });
    const password = body.password;
    const hashedPassword = user?.password;
    let match: boolean = false;
    if (hashedPassword) {
      match = await verifyPassword(password, hashedPassword);
    }

    if (user && match) {
      const payload = {
        id: user._id,
      };
      const token = jwt.sign(payload, SC);
      res.cookie("token", token, cookieOptions);
      res.json({ message: "Logged in" });
    } else if (user && !match) {
      const error = new ApiError(401, "Wrong password");
      return errorHandler(res, error);
    } else {
      const error = new ApiError(404, "Signup to continue");
      return errorHandler(res, error);
    }
  } catch (error: any) {
    return errorHandler(res, error);
  }
};

/**
 * @param req - Request object
 * @param res - Response object
 * @returns deletes the JWT token from the cookies and return json response
 */
const logout = async (req: any, res: Response) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
};

/**
 * @param req - Request object containing the user object decoded from the token
 * @param res - Response object
 * @returns returns the profile of the current logged in user
 */
const myProfile = async (req: any, res: Response) => {
  const userId = req.user.id;
  const user = await Buyer.findById(userId);
  if (!user) {
    throw new ApiError(400, "User not found");
  }
  res.json({
    message: "UserInformation successfully shared",
    information: user,
  });
};

/**
 * @param req - Request object containing the user object decoded from the token
 * @param res - Response object
 * @returns updates the profile of the current logged in user
 */
const updateProfile = async (req: any, res: Response) => {
  const userId = req.user.id;
  const user = await Buyer.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  await Buyer.updateOne({ _id: userId }, req.body);
  await user.save();
  res.json({
    message: "UserInformation successfully updated",
  });
};

/**
 * @param req - Request object containing the user object decoded from the token
 * @param res - Response object
 * @returns deletes the profile of the current logged in user
 */
const deleteUser = async (req: Request, res: Response) => {
  try {
    const deleteUser = await Buyer.deleteOne({ _id: req.user.id });
    if (!deleteUser) {
      throw new ApiError(400, "Unable to delete User");
    }

    res.status(200).json({
      message: "User has been deleted successfully !",
    });
  } catch (error: any) {
    return errorHandler(res, error);
  }
};

export { myProfile, updateProfile, logout, signup, login, deleteUser };
