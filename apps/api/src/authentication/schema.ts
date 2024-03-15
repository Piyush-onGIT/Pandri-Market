import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNo: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  credit: {
    default: 300,
    type: Number,
    required: true,
  },
});
const UserModel = mongoose.model("User", UserSchema);
export { UserModel };
