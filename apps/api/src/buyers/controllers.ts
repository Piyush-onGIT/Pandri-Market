import { Request, Response } from "express";
import { Likes, Comments } from "./schema";
import { CommentDto } from "./dto/comment.dto";
import { validateDto } from "../services/validateDto";
import { ShopPostModel } from "../shops/schema";

const likePost = async (req: Request, res: Response) => {
  try {
    const likes = new Likes({ postId: req.params.id, likedBy: req.user.id });
    await likes.save();
    const post = await ShopPostModel.findById(req.params.id);
    if (post && post.likes) {
      await post.updateOne({
        $inc: {
          likes: 1,
        },
      });
      await post.save();
    } else if (post) {
      post.likes = 1;
      await post.save();
    }
    return res.json({ message: "Likes added" });
  } catch (error) {
    throw new Error("Unauthorised");
  }
};

const commentPost = async (req: Request, res: Response) => {
  try {
    const commentDto = await validateDto(CommentDto, req.body);
    commentDto.postId = req.params.id;
    commentDto.commentBy = req.user.id;
    await Comments.create({
      ...commentDto,
    });
    const post = await ShopPostModel.findById(req.params.id);
    if (post && post.comments) {
      post.comments = post.comments + 1;
      await post.save();
    } else if (post) {
      post.comments = 1;
      await post.save();
    }

    return res.json({ message: "Comment added" });
  } catch (error) {
    throw new Error("Unauthorised");
  }
};

export { likePost, commentPost };
