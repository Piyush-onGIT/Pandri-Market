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
export class UserLoginDto {
  @IsString()
  @Expose()
  phoneNo!: string;

  @IsString()
  @Expose()
  password!: string;
}
