import { Router } from "express";
import { signup, login } from "./controllers";
import { verifyUser } from "./middleware";
import { myProfile, updateProfile, logout } from "./controllers";
const router = Router();
router.post("/signup", signup);
router.post("/login", login);
router.get("/myProfile", verifyUser, myProfile);
router.post("/updateProfile", verifyUser, updateProfile);
router.get("/logout", logout);

export default router;
