import { NextFunction } from "express";
import ApiError from "../http/ApiError";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyUser = (req: any, _: any, next: NextFunction) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      next(new ApiError(401, "Token missing"));
    }

    const user = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
    req.user = user;
    next();
  } catch (error: any) {
    return next(new ApiError(401, "Unauthorized", error));
  }
};
