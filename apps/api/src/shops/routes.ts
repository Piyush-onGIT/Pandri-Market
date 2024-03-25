import { Router } from "express";
import {
  shopRegistration,
  getMyShops,
  deleteMyShop,
  updateMyShop,
  posts,
  getAllPosts,
  getPostDetails,
} from "./controllers";
import { verifyUser } from "../authentication/middleware";

const router = Router();

router.route("/shopRegistration").post(verifyUser, shopRegistration);
router.route("/getMyShops").get(verifyUser, getMyShops);
router.route("/deleteMyShop/:id").delete(verifyUser, deleteMyShop);
router.route("/updateMyShop/:id").patch(verifyUser, updateMyShop);
router.post("/posts/:id", verifyUser, posts);
router.get("/getAllPosts/:id", verifyUser, getAllPosts);
router.get("/getPostDetails", verifyUser, getPostDetails);

export default router;
