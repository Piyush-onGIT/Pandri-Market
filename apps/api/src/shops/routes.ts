import { Router } from "express";

import { shopRegistration } from "./controllers";

const router = Router();

router.route("/shopRegistration").post(shopRegistration);

export default router;
