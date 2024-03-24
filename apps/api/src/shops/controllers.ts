import { Request, Response } from "express";
import { ShopPostModel, Shop } from "./schema";
import errorHandler from "../http/errorHandler";
import { ShopDto, ShopUpdate, postForShop } from "./dto/shop.dto";
import { validateDto } from "../services/validateDto";
import { UserModel } from "../authentication/schema";
import ApiError from "../http/ApiError";
import mongoose from "mongoose";
import categorizeURL from "../utils/photOrVideo";

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
    const userget = await UserModel.findOne({ _id: req.user.id });
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

    res.status(200).json({
      message: "Succesfull listed the shops",
      shops: shops,
    });
  } catch (error: any) {
    return errorHandler(res, error);
  }
};

const deleteMyShop = async (req: Request, res: Response) => {
  try {
    const shopId = req.params.id;
    const deleteShop = await Shop.findByIdAndDelete(shopId);
    if (!deleteShop) {
      throw new ApiError(404, "Shop not found");
    }
    res.status(200).json({
      message: "Shop has been deleted successfully",
      statusCode: 200,
    });
  } catch (error: any) {
    return errorHandler(res, error);
  }
};

const updateMyShop = async (req: Request, res: Response) => {
  try {
    const shopUpdate = await validateDto(ShopUpdate, req.body);
    const updatedShop = await Shop.findByIdAndUpdate(
      req.params.id,
      {
        $set: { ...shopUpdate },
      },
      {
        new: true,
      }
    );

    if (!updatedShop) {
      throw new ApiError(400, "Unable to update shop try again..");
    }

    res.status(200).json({
      message: "Shop updated successfully",
      updatedShop,
    });
  } catch (error: any) {
    return errorHandler(res, error);
  }
};

const posts = async (req: any, res: Response) => {
  try {
    const postDetails = await validateDto(postForShop, req.body);
    const postUrl = categorizeURL(postDetails.url);
    if (postUrl === "Unknown") {
      throw new ApiError(
        400,
        "Incorrect file type. Pleae use valid image/video"
      );
    }
    let reduction: number = 0;
    if (postUrl === "Photo") reduction = 50;
    else reduction = 70;

    const userid = req.user.id;
    const user = await UserModel.findById(userid);
    if (user && user.credit >= reduction) {
      const postCreated = await ShopPostModel.create({
        ...postDetails,
      });

      if (!postCreated) {
        throw new ApiError(500, "Unable to post please try again");
      }

      user.credit = user.credit - reduction;
      await user.save();
      return res.status(200).json({
        message: "Successfully posted!",
      });
    } else {
      return res.status(200).json({
        message: "You dont have enough credits!",
      });
    }
  } catch (error: any) {
    return errorHandler(res, error);
  }
};

export { shopRegistration, getMyShops, deleteMyShop, updateMyShop, posts };
