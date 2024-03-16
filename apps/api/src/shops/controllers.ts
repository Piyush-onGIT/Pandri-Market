import { Request, Response } from "express";
import { Shop } from "./schema";
import errorHandler from "../http/errorHandler";
import { ShopDto } from "./dto/shop.dto";
import { validateDto } from "../services/validateDto";
import { UserModel } from "../authentication/schema";
import ApiError from "../http/ApiError";

const shopRegistration = async (req: Request, res: Response) => {
  try {
    const shopDto = await validateDto(ShopDto, req.body);
    const sameNameShop = await Shop.findOne({ shopName: shopDto.shopName });

    if (sameNameShop) {
      throw new ApiError(
        401,
        "This shop name has already been taken for this user please take another name"
      );
    }
    const userget = await UserModel.findOne({ email: req.user.email });

    if (!userget) {
      throw new ApiError(
        404,
        "Unauthorised access, please login to create shop"
      );
    }

    shopDto.owner = userget;
    await Shop.create({
      ...shopDto,
    });

    //  const createdShop = await Shop.findById(shop._id);
    //  if (!createdShop) {
    //    throw new Error("Shop not found");
    //  }
    return res.status(200).json({
      sucess: true,
      message: "Shop created successfully",
      statusCode: 200,
    });
  } catch (error: any) {
    return errorHandler(res, error);
  }
};

export { shopRegistration };
