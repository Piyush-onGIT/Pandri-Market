import { Router } from "express";
import { signup, login, deleteUser } from "./controllers";
import { verifyUser } from "./middleware";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.route("/deleteUser").delete(verifyUser, deleteUser);

export default router;
