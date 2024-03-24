import { Router } from "express";
import { verifyUser } from "../middleware";
import {
  buyerProfile,
  buyerupdateProfile,
  buyerlogout,
  buyersignup,
  buyerlogin,
  buyerdeleteUser,
} from "./controllers";

const router = Router();
router.post("/buyersignup", buyersignup);
router.post("/buyerlogin", buyerlogin);
router.get("/buyerProfile", verifyUser, buyerProfile);
router.post("/buyerupdateProfile", verifyUser, buyerupdateProfile);
router.get("/buyerlogout", buyerlogout);
router.delete("/buyerdeleteUser", verifyUser, buyerdeleteUser);

export default router;
