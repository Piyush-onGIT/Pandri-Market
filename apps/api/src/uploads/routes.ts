import { Router } from "express";
import { upload, uploadMultiple, uploadSingle } from "./controllers";
const router = Router();

// router.use(verifyUser);

router.route("/single").post(upload.single("productImage"), uploadSingle);

router
  .route("/multiple")
  .post(upload.array("productImages", 5), uploadMultiple);

export default router;
