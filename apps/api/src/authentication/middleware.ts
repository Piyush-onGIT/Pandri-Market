import { Request, NextFunction } from "express";
import ApiError from "../http/ApiError";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Shop } from "../shops/schema";

dotenv.config();

export const verifyUser = (req: Request, _: any, next: NextFunction) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      next(new ApiError(401, "Token missing"));
    }

    const user: any = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
    req.user = user;
    next();
  } catch (error: any) {
    return next(new ApiError(401, "Unauthorized", error));
  }
};

export const isMyShop = async (req: Request, _: any, next: NextFunction) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      next(new ApiError(401, "Token missing"));
    }
    const shopId = req.params.id;
    const shop = await Shop.findById(shopId);
    if (!shop) {
      const shopId = req.params.id;
      const shop = await Shop.findById(shopId);
      if (!shop) {
        next(new ApiError(401, "No such shop exists"));
      }
      next(new ApiError(401, "No such shop exists"));
    }

    const ownerid = req.user.id;
    if (ownerid == shop?.owner) {
      next();
    } else {
      return next(new ApiError(401, "Unauthorized"));
    }
  } catch (error: any) {
    return next(new ApiError(401, "Unauthorized", error));
  }
};
