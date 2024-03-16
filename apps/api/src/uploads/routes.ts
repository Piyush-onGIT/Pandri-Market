import { Router } from "express";
import { upload, putImg } from "./controller";
const router = Router();

// router.use(verifyUser);

router.route("/single").post(upload.single("productImage"), putImg);

router.route("/multiple").post(upload.array("productImage", 5), putImg);

export default router;
