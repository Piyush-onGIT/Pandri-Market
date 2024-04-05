import { Expose } from "class-transformer";
import { IsOptional, IsString } from "class-validator";

export class UserRegisterDto {
  @IsString()
  @Expose()
  email!: string;

  @IsString()
  @Expose()
  phoneNo!: string;

  @IsOptional()
  @IsString()
  @Expose()
  fullName!: string;

  @IsString()
  @Expose()
  address!: string;

  @IsString()
  @Expose()
  password!: string;
}
