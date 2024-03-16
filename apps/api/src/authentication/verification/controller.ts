import { Response } from "express";
import axios from "axios";
import errorHandler from "../../http/errorHandler";
import ApiError from "../../http/ApiError";
import { Redis } from "ioredis";

const redis = new Redis();
function generateRandomNumber(): number {
  let randomNumberStr: string = '';
  for (let i = 0; i < 4; i++) {
      randomNumberStr += Math.floor(Math.random() * 10).toString();
  }
  const randomNumber: number = parseInt(randomNumberStr);
  return randomNumber;
}
const  verifyPhoneNo =async  (req: any, res: Response) => {
    const result = await axios.get(`http://localhost:5001/api/checkNumberStatus?phone=${req.body.phoneNo}&session=default`);
    const phoneNoExist : Boolean= result.data.numberExists;
    if(!phoneNoExist){
        const error = new ApiError(401, "Invalid PhoneNO");
      return errorHandler(res, error); 
    }
    else{
      const otp=generateRandomNumber();
      const requestingBody={
          "chatId": `${req.body.phoneNo}@c.us`,
          "text": `${otp}`,
          "session": "default"
      }
      const result=await axios.post("http://localhost:5001/api/sendText",requestingBody);
      redis.set(req.body.phoneNo,otp, 'EX', 60);
      res.json({"message": "OTP sent"});
      // console.log(result);
    }
  
};
const verifyOtp = async (req:any,res:Response)=>{
   const otp=req.body.otp;
   const phoneNo=req.body.phoneNo;
   const storedOtp =await redis.get(phoneNo);
    console.log(phoneNo);
     console.log(storedOtp);
     if(storedOtp===otp){
      res.json({"message": "PhoneNo Verified"});
    }
    else{
      res.json({"message": "OTP invalid"});
    }
}
export {verifyPhoneNo,verifyOtp};