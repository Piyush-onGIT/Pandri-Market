import mongoose, { Schema } from "mongoose";

const shopsSchema = new Schema(
  {
    shopName: {
      type: "string",
      required: true,
      trim: true,
    },
    shopAdress: {
      type: "string",
      required: true,
      unique: true,
      trim: true,
    },
    shopPhoto: {
      type: "string",
    },
    isPhysicalShop: {
      type: "boolean",
      required: true,
    },
    catagorySold: {
      type: "string",
      required: true,
    },
    gstNo: {
      type: "string",
    },
    brands: {
      type: "string",
      required: true,
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Shop = mongoose.model("Shop", shopsSchema);
