import { Router } from "express";

import { shopRegistration } from "./controllers";
import { verifyUser } from "../authentication/middleware";

const router = Router();

router.use(verifyUser);

router.route("/shopRegistration").post(shopRegistration);

export default router;
