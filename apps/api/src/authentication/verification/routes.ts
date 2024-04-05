import { Router } from "express";
import { verifyPhoneNo, verifyOtp } from "./controllers";
import { verifyUser } from "../middleware";

const router = Router();

router.post("/verifyPhoneNo", verifyUser, verifyPhoneNo);
router.post("/verifyOtp", verifyOtp);

export default router;
