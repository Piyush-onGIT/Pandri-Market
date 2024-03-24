import { Router } from "express";
import { verifyUser } from "../authentication/middleware";
import { likepost,commentpost } from "./controllers";
const router = Router();
router.get("/likes/:id",verifyUser, likepost);
router.post("/comments/:id",verifyUser, commentpost);