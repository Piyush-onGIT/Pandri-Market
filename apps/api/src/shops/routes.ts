import { Router } from "express";

import { shopRegistration, getMyShops, deleteShop } from "./controllers";
import { verifyUser } from "../authentication/middleware";

const router = Router();

// router.use(verifyUser);

router.route("/shopRegistration").post(verifyUser, shopRegistration);
router.route("/getShops").get(verifyUser, getMyShops);
router.route("/deleteShop/:id").delete(verifyUser, deleteShop);

export default router;
