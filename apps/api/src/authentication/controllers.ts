import { UserModel } from "./schema";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { Response } from "express";
import { UserRegisterDto } from "./dto/userRegister.dto";
import { validateDto } from "../services/validateDto";
import errorHandler from "../http/errorHandler";
import ApiError from "../http/ApiError";
import { UserLoginDto } from "./dto/userLogin.dto";
import bcrypt from "bcrypt";
dotenv.config();
const SC = `${process.env.JWT_SECRET_KEY}`;

async function hashPassword(password: string) {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error("Error hashing password");
  }
}
async function verifyPassword(plainPassword: string, hashedPassword: string) {
  try {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
  } catch (error) {
    throw new Error("Error verifying password");
  }
}
const signup = async (req: any, res: Response) => {
  try {
    const userDto = await validateDto(UserRegisterDto, req.body);
    const hashedPassword = await hashPassword(userDto.password);
    userDto.password = hashedPassword;
    await UserModel.create({
      ...userDto,
    });
    userDto.credit = 300;
    console.log(userDto);
    return res.status(200).json({
      message: "Account created successfully",
    });
  } catch (error: any) {
    return errorHandler(res, error);
  }
};
const login = async (req: any, res: Response) => {
  try {
    const body = await validateDto(UserLoginDto, req.body);
    const user = await UserModel.findOne({ phoneNo: body.phoneNo });
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
      res.cookie("token", token);
      res.json({ message: "Logged in", token: token });
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
const logout = async (req: any, res: Response) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
};

const myProfile = async (req: any, res: Response) => {
  const userId = req.user.id;
  const user = await UserModel.findById(userId);
  if (!user) {
    throw new ApiError(400, "User not found");
  }
  res.json({
    message: "UserInformation successfully shared",
    information: user,
  });
};
const updateProfile = async (req: any, res: Response) => {
  const userId = req.user.id;
  const user = await UserModel.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  await UserModel.updateOne({ _id: userId }, req.body);
  await user.save();
  res.json({
    message: "UserInformation successfully updated",
  });
};
export { signup, login, myProfile, updateProfile, logout };
