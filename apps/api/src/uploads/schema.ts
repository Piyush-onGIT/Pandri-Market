import { Schema } from "mongoose";
import * as mongoose from "mongoose";
const productSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    //  required: true,
  },
  images: {
    type: String,
    //  required: true,
  },
});
const ProductModel = mongoose.model("Product", productSchema);
export { ProductModel };
