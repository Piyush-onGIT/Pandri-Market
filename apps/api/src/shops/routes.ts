import { Router } from "express";

import {
  shopRegistration,
  getMyShops,
  deleteShop,
  updateShop,
} from "./controllers";
import { verifyUser } from "../authentication/middleware";

const router = Router();

// router.use(verifyUser);

router.route("/shopRegistration").post(verifyUser, shopRegistration);
router.route("/getShops").get(verifyUser, getMyShops);
router.route("/deleteShop/:id").delete(verifyUser, deleteShop);
router.route("/shopUpdate/:id").patch(verifyUser, updateShop);

export default router;
