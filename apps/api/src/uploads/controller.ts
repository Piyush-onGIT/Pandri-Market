import { Request, Response } from "express";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    cb(null, "../api/src/uploads/tempImg");
  },

  filename: function (req: any, file: any, cb: any) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const putImg = async (req: Request, res: Response) => {
  console.log(req.file);
  res.status(200).json({
    status: 200,
    message: "Image uploaded successfully",
  });
};

export { upload, putImg };
