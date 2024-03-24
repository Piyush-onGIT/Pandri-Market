import mongoose, { trusted } from "mongoose";

const BuyerSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Buyer = mongoose.model("Buyer", BuyerSchema);
