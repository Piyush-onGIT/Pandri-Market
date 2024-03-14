import { Expose } from "class-transformer";
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  Validate,
} from "class-validator";

import { validateOrReject } from "class-validator";
import mongoose from "mongoose";
import errorHandler from "../../http/errorHandler";

export class ShopDto {
  @IsString()
  @Expose()
  shopName!: string;

  @IsString()
  @Expose()
  shopAddress!: string;

  @IsOptional()
  @IsBoolean()
  @Expose()
  isPhysicalShop!: boolean;

  @IsOptional()
  @IsString()
  @Expose()
  gstNo!: string;

  @IsOptional()
  @IsArray()
  @Expose()
  brands!: string[];

  @IsOptional()
  @IsArray()
  @Expose()
  categorySold!: string[];

  @IsOptional()
  @Expose()
  owner!: mongoose.Types.ObjectId;
}
