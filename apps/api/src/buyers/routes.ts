import { Router } from "express";
import { verifyUser } from "../authentication/middleware";
import { likePost, commentPost } from "./controllers";
const router = Router();
router.get("/likes/:id", verifyUser, likePost);
router.post("/comments/:id", verifyUser, commentPost);

export default router;
