import { UserModel } from "./schema";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { Response } from "express";
import { UserRegisterDto } from "./dto/userRegister.dto";
import { validateDto } from "../services/validateDto";
import errorHandler from "../http/errorHandler";
import ApiError from "../http/ApiError";
import { UserLoginDto } from "./dto/userLogin.dto";
dotenv.config();
const SC = `${process.env.JWT_SECRET_KEY}`;

const signup = async (req: any, res: Response) => {
  try {
    const userDto = await validateDto(UserRegisterDto, req.body);
    await UserModel.create({
      ...userDto,
    });
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
    if (
      user &&
      user.phoneNo == body.phoneNo &&
      user.password == body.password
    ) {
      const payload = {
        phoneNo: user.phoneNo,
      };
      const token = jwt.sign(payload, SC);
      res.cookie("token", token);
      res.json({ message: "Logged in", token: token });
    } else if (user && user.phoneNo != body.phoneNo) {
      const error = new ApiError(405, "Wrong phoneNo");
      return errorHandler(res, error);
    } else if (user && user.password !== body.password) {
      const error = new ApiError(401, "Wrong password");
      return errorHandler(res, error);
    } else {
      const error = new ApiError(404, "signup to continue");
      return errorHandler(res, error);
    }
  } catch (error: any) {
    return errorHandler(res, error);
  }
};
export { signup, login };
