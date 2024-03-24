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

export class CommentDto{
    @IsString()
    @Expose()
    comment!: string;
}