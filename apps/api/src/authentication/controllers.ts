import { UserModel } from "./schema";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();
const signup = async (req: any, res: any) => {
  const body = req.body;
  const userDoc = new UserModel(body);
  try {
    await userDoc.save();
    res.json({ message: "Account created" });
  } catch (error) {
    res.json({ message: "email or phoneNo already exists" });
  }
};
const login = async (req: any, res: any) => {
  const body = req.body;
  const user = await UserModel.findOne({ email: body.email });
  if (user && user.phoneNo == body.phoneNo) {
    const payload = {
      email: user.email,
      phoneNo: user.phoneNo,
    };
    const sc = `${process.env.JWT_SECRET_KEY}`;
    const token = jwt.sign(payload, sc);
    res.json({ message: "Logged in", token: token });
  } else if (user && user.phoneNo != body.phoneNo)
    res.json({ message: "wrong phoneNo" });
  else res.json({ message: "signup to continue" });
};
export { signup, login };
