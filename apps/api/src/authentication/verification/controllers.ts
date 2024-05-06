import { Response } from "express";
import axios from "axios";
import errorHandler from "../../http/errorHandler";
import ApiError from "../../http/ApiError";
import { Redis } from "ioredis";
import { SellerModel } from "../schema";
import * as dotenv from "dotenv";

dotenv.config();

const redis = new Redis({
  host: (process.env.REDIS_HOST as string) || "localhost",
  port: parseInt(process.env.REDIS_PORT as string) || 6379,
});

const generateRandomNumber = (): number => {
  let randomNumberStr: string = "";
  for (let i = 0; i < 4; i++) {
    randomNumberStr += Math.floor(Math.random() * 10).toString();
  }
  const randomNumber: number = parseInt(randomNumberStr);
  return randomNumber;
};

const verifyPhoneNo = async (req: any, res: Response) => {
  const result = await axios.get(
    `${process.env.WHATSAPP_API}/api/checkNumberStatus?phone=${req.body.phoneNo}&session=default`
  );
  const phoneNoExist: boolean = result.data.numberExists;
  console.log(phoneNoExist);
  if (!phoneNoExist) {
    const error = new ApiError(401, "Invalid PhoneNO");
    return errorHandler(res, error);
  } else {
    const otp = generateRandomNumber();
    const requestingBody = {
      chatId: `${req.body.phoneNo}@c.us`,
      text: `${otp}`,
      session: "default",
    };
    await axios.post(
      `${process.env.WHATSAPP_API}/api/sendText`,
      requestingBody
    );
    redis.set(req.body.phoneNo, otp, "EX", 60);
    res.json({ message: "OTP sent" });
  }
};

const verifyOtp = async (req: any, res: Response) => {
  const otp = req.body.otp;
  const phoneNo = req.body.phoneNo;
  const storedOtp = await redis.get(phoneNo);
  if (storedOtp === otp) {
    await SellerModel.updateOne(
      { phoneNo: phoneNo },
      { isPhoneVerified: true, credit: 300 }
    );
    res.json({ message: "PhoneNo Verified" });
  } else {
    res.json({ message: "OTP invalid" });
  }
};

export { verifyPhoneNo, verifyOtp };
