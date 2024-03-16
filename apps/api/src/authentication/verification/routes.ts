import { Router } from "express";
import { verifyPhoneNo, verifyOtp } from "./controller";
const router = Router();
router.post("/verifyPhoneNo",verifyPhoneNo);
router.post("/verifyOtp",verifyOtp);
export default router;