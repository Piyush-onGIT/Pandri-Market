import { Router } from "express";
import {
  shopRegistration,
  getMyShops,
  deleteMyShop,
  updateMyShop,
} from "./controllers";
import { verifyUser } from "../authentication/middleware";

const router = Router();

router.route("/shopRegistration").post(verifyUser, shopRegistration);
router.route("/getMyShops").get(verifyUser, getMyShops);
router.route("/deleteMyShop/:id").delete(verifyUser, deleteMyShop);
router.route("/updateMyShop/:id").patch(verifyUser, updateMyShop);

export default router;
