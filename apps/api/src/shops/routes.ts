import { Router } from "express";

import ShopController, {
  shopRegistration,
  getMyShops,
  deleteShop,
} from "./controllers";
import { verifyUser } from "../authentication/middleware";

const router = Router();

// router.use(verifyUser);

router.route("/shopRegistration").post(verifyUser, shopRegistration);
router.route("/getShops").get(verifyUser, getMyShops);
router.route("/deleteShop/:id").delete(verifyUser, deleteShop);

router.get("/ping", async (_req, res) => {
  const controller = new ShopController();
  const response = await controller.getMessage();
  return res.send(response);
});

export default router;
