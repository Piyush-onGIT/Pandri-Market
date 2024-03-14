import { Request, Response } from "express";
import { Shop } from "./schema";
import errorHandler from "../http/errorHandler";
import { ShopDto } from "./dto/shop.dto";
import { validateDto } from "../services/validateDto";

const shopRegistration = async (req: Request, res: Response) => {
  try {
    const shopDto = await validateDto(ShopDto, req.body);

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
