import { Router } from "express";
import {
  shopRegistration,
  getMyShops,
  deleteMyShop,
  updateMyShop,
  posts,
  
} from "./controllers";
import { verifyUser } from "../authentication/middleware";
import { isMyShop } from "../authentication/middleware";
const router = Router();

router.route("/shopRegistration").post(verifyUser, shopRegistration);
router.route("/getMyShops").get(verifyUser, getMyShops);
router.route("/deleteMyShop/:id").delete(verifyUser, deleteMyShop);
router.route("/updateMyShop/:id").patch(verifyUser, updateMyShop);
router.post("/posts/:id", verifyUser, isMyShop, posts);
export default router;
