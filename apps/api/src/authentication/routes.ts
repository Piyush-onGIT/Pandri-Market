import { Router } from "express";
import { verifyUser } from "./middleware";
import { myProfile, updateProfile, logout } from "./controllers";
import { signup, login, deleteUser } from "./controllers";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/myProfile", verifyUser, myProfile);
router.post("/updateProfile", verifyUser, updateProfile);
router.get("/logout", logout);
router.delete("/deleteUser", verifyUser, deleteUser);

export default router;
