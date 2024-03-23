import { Router } from "express";
import {
  shopRegistration,
  getMyShops,
  deleteMyShop,
  updateMyShop,
  photoPosts,
  videoPosts,
} from "./controllers";
import { verifyUser } from "../authentication/middleware";

const router = Router();

router.route("/shopRegistration").post(verifyUser, shopRegistration);
router.route("/getMyShops").get(verifyUser, getMyShops);
router.route("/deleteMyShop/:id").delete(verifyUser, deleteMyShop);
router.route("/updateMyShop/:id").patch(verifyUser, updateMyShop);
router.post("/photoPosts", verifyUser, photoPosts);
router.post("/videoPosts", verifyUser, videoPosts);
export default router;
