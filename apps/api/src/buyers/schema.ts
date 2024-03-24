import mongoose from "mongoose";
import { Schema } from "mongoose";
import { ShopPostModel } from "../shops/schema";
import { Buyer } from "../authentication/buyers/schema";
const likeSchema = new Schema({
  postId: {
    type: Schema.Types.ObjectId,
    ref: ShopPostModel,
  },
  likedBy: {
    type: Schema.Types.ObjectId,
    ref: Buyer,
  },
});
const commentSchema = new Schema({
  postId: {
    type: Schema.Types.ObjectId,
    ref: ShopPostModel,
  },
  commentBy: {
    type: Schema.Types.ObjectId,
    ref: Buyer,
  },
  comment: {
    type: String,
    required: true,
  },
});

export const Likes = mongoose.model("Likes", likeSchema);
export const Comments = mongoose.model("Comments", commentSchema);
