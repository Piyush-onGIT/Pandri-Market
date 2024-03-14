import mongoose, { Schema, Document, Types } from "mongoose";

interface IShop extends Document {
  shopName: string;
  shopAddress: string;
  shopPhoto?: string;
  isPhysicalShop: boolean;
  categorySold: string[];
  gstNo?: string;
  brands: string[];
  owner: Types.ObjectId;
}

const shopsSchema: Schema<IShop> = new Schema(
  {
    shopName: {
      type: String,
      required: true,
      trim: true,
    },
    shopAddress: {
      type: String,
      required: true,
      trim: true,
    },
    shopPhoto: {
      type: String,
      required: false,
    },
    isPhysicalShop: {
      type: Boolean,
      required: false,
    },
    categorySold: {
      type: [String],
      required: false,
    },
    gstNo: {
      type: String,
    },
    brands: {
      type: [String],
      required: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Shop = mongoose.model<IShop>("Shop", shopsSchema);
