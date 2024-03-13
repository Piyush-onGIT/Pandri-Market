import { Expose } from "class-transformer";
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  Validate,
} from "class-validator";
import mongoose from "mongoose";

export class ShopDTO {
  @IsString({ message: "Not String" })
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
