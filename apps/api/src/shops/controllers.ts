import { Request, Response } from "express";
import { Shop } from "./schema";
import errorHandler from "../http/errorHandler";
import { ShopDto } from "./dto/shop.dto";
import { validateDto } from "../services/validateDto";
import { UserModel } from "../authentication/schema";
import ApiError from "../http/ApiError";
import mongoose from "mongoose";
import { Get, Route } from "tsoa";

@Route("ping")
export default class ShopController {
  @Get("/")
  public async getMessage() {
    return {
      message: "hello",
    };
  }
}

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
    const userget = await UserModel.findOne({ id: req.user._id });
    console.log(userget);

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

const getMyShops = async (req: Request, res: Response) => {
  try {
    const shopOwner = req.user.id;
    if (!shopOwner || shopOwner === "") {
      throw new ApiError(400, "Please login to check your shops");
    }
    console.log("user id is: ", req.user.id);

    const shops = await Shop.aggregate([
      {
        $match: {
          owner: new mongoose.Types.ObjectId(req.user.id),
        },
      },
    ]);
    console.log("aggregated shops are: ", shops);
    res.status(200).json({
      message: "Succesfull listed the shops",
      shops: shops,
    });
  } catch (error: any) {
    return errorHandler(res, error);
  }
};

const deleteShop = async (req: Request, res: Response) => {
  try {
    const shopId = req.params.id;
    const deleteShop = await Shop.findByIdAndDelete(shopId);
    if (!deleteShop) {
      throw new ApiError(404, "Shop not found");
    }
    res.status(200).json({
      message: "Shop has been deleted successfully",
    });
  } catch (error: any) {
    return errorHandler(res, error);
  }
};

export { shopRegistration, getMyShops, deleteShop };
