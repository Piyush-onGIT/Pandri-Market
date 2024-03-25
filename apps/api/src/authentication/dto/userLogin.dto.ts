import { Expose } from "class-transformer";
import { IsString } from "class-validator";

export class UserLoginDto {
  @IsString()
  @Expose()
  phoneNo!: string;

  @IsString()
  @Expose()
  password!: string;
}
