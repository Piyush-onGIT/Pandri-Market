import { Request, Response } from "express";
import multer from "multer";
// import {
//   GetObjectCommand,
//   PutObjectCommand,
//   S3Client,
// } from "@aws-sdk/client-s3";
// import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// const s3Client = new S3Client({
//   credentials: {
//     accessKeyId: "AKIAVRUVQRD4FY3HIDP7",
//     secretAccessKey: "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",
//   },
// });

// async function getObjectURL(key: any) {
//   const command = new GetObjectCommand({
//     Bucket: "pandri-market-bucket",
//     Key: key,
//   });

//   const url = await getSignedUrl(s3Client, command);
//   return url;
// }

// const putObjet = async (filename: any, contentType: any) => {
//   const command = new PutObjectCommand({
//     Bucket: "pandri-market-bucket",
//     Key: `./uploads/user/${filename}`,
//     ContentType: contentType,
//   });
//   const url = await getSignedUrl(s3Client, command);
//   return url;
// };

// const uploadToS3 = async () => {};

const storage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    cb(null, "../api/src/uploads/temp");
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
