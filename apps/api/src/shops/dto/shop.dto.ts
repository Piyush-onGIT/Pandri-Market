import { Expose } from "class-transformer";
import { Schema } from "mongoose";
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  Validate,
  IsNumber,
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

  @Expose()
  owner!: mongoose.Types.ObjectId;
}

export class ShopUpdate {
  @IsOptional()
  @IsString()
  @Expose()
  shopName!: string;

  @IsOptional()
  @IsString()
  @Expose()
  shopAddress!: string;

  @IsOptional()
  @IsString()
  @Expose()
  shopPhoto!: string;

  @IsOptional()
  @IsBoolean()
  @Expose()
  isPhysicalShop!: boolean;

  @IsOptional()
  @IsArray()
  @Expose()
  categorySold!: string[];

  @IsOptional()
  @IsArray()
  @Expose()
  brands!: string[];
}

export class postForShop {
  @IsString()
  @Expose()
  url!: string;

  @IsString()
  @Expose()
  tags!: string;
}
