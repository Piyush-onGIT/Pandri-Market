import { Request, Response } from "express";
import { Shop } from "./schema";
import errorHandler from "../http/errorHandler";
import { plainToClass } from "class-transformer";
import { ShopDTO } from "./dto/shop.dto";
import { validateOrReject } from "class-validator";

const shopRegistration = async (req: Request, res: Response) => {
  try {
    const shopDto = plainToClass(ShopDTO, req.body, {
      excludeExtraneousValues: true,
    });

    try {
      await validateOrReject(shopDto);
    } catch (err: any) {
      const constraintErrors = err[0].constraints;
      const error = constraintErrors[Object.keys(constraintErrors)[0]];
      return errorHandler(res, err, error, 405);
    }

    // validateOrReject(shopDto).catch((err) => {
    //   const constraintErrors = err[0].constraints;
    //   const error = constraintErrors[Object.keys(constraintErrors)[0]];
    //   // return errorHandler(res, err, error, 405);
    //   throw new Error(error);
    // });
    // console.log(shopDto);
    // console.log(x);

    // await Shop.create({
    //   ...shopDto,
    // });

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
    return errorHandler(res, error, "Something went wrong", 500);
  }
};

export { shopRegistration };
