import { Expose } from "class-transformer";

import { IsOptional, IsString } from "class-validator";

export class BuyerLoginDto {
  @IsString()
  @Expose()
  password!: string;

  @IsString()
  @Expose()
  phone!: string;
}

export class BuyerSignupDto {
  @IsString()
  @Expose()
  email!: string;

  @IsString()
  @Expose()
  phone!: string;

  @IsOptional()
  @IsString()
  @Expose()
  fullName!: string;

  @IsOptional()
  @IsString()
  @Expose()
  address!: string;

  @IsString()
  @Expose()
  password!: string;
}
