import multer from "multer";
import s3 from "../utils/aws/s3";
import { Request, Response } from "express";
import ApiError from "../http/ApiError";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

/**
 *
 * @param file - takes a file as a parameter
 * @returns - returns the image link url of uploaded file
 */
const uploadToS3 = async (file: any) => {
  if (!file) {
    throw new ApiError(400, "Please upload image.");
  }
  console.log(file.buffer);

  try {
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME || "",
      Key: file.originalname,
      Body: file.buffer,
    };

    const data = await s3.upload(params).promise();

    return data.Location;
  } catch (error) {
    console.error(error);
    throw new ApiError(500, "Error uploading file.");
  }
};

/**
 *
 * @param req - takes single image file
 * @param res - returns image link generated on s3 bucket
 */
const uploadSingle = async (req: Request, res: Response) => {
  try {
    const imgUrls = await uploadToS3(req.file);
    res.status(200).json({
      message: "Image uploaded successfully",
      imgUrls: imgUrls,
    });
  } catch (error: any) {
    throw new ApiError(500, error);
  }
};

const uploadMultiple = async (req: Request, res: Response) => {
  const files = req.files;

  if (!files) {
    throw new ApiError(400, "No files uploaded.");
  }

  if (Array.isArray(files)) {
    const imgUrls = await Promise.all(files.map(uploadToS3));
    res.status(200).json({
      message: "Images uploaded successfully",
      imgUrls: imgUrls,
    });
  } else {
    throw new ApiError(400, "Single upload not allowed");
  }
};

export { upload, uploadMultiple, uploadSingle };
