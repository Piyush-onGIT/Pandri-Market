import mongoose from "mongoose";
import { Schema } from "mongoose";

const sellerSchema = new Schema({
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
  },
  isPhoneVerified: {
    default: false,
    type: Boolean,
    required: true,
  },
});

const SellerModel = mongoose.model("Seller", sellerSchema);
export { SellerModel };
