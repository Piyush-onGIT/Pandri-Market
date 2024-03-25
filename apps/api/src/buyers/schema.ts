import mongoose from "mongoose";
import { Schema } from "mongoose";
import { ShopPostModel } from "../shops/schema";
import { Buyer } from "../authentication/buyers/schema";

const likeSchema = new Schema({
  postId: {
    type: Schema.Types.ObjectId,
    ref: ShopPostModel,
    required: true,
  },
  likedBy: {
    type: Schema.Types.ObjectId,
    ref: Buyer,
    required: true,
  },
});

const commentSchema = new Schema({
  postId: {
    type: Schema.Types.ObjectId,
    ref: ShopPostModel,
    required: true,
  },
  commentBy: {
    type: Schema.Types.ObjectId,
    ref: Buyer,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const Likes = mongoose.model("Like", likeSchema);
const Comments = mongoose.model("Comment", commentSchema);

export { Likes, Comments };
