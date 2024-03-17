import express, { Express, NextFunction, Response } from "express";
import db from "./db/conn";
import * as dotenv from "dotenv";
import "reflect-metadata";
import shopRoutes from "./shops/routes";
import uploadroutes from "./uploads/routes";
import errorHandler from "./http/errorHandler";
import authRoutes from "./authentication/routes";
import verifyPhoneNoRoutes from "./authentication/verification/routes";
import cookieParser from "cookie-parser";

dotenv.config();

// export interface CustomRequest extends Request {
//   user: any;
// }

const app: Express = express();
app.use(express.json());
app.use(cookieParser());
app.use(shopRoutes);
app.use(authRoutes);
app.use("/upload", uploadroutes);
app.use(verifyPhoneNoRoutes);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: any, _: any, res: Response, __: NextFunction) => {
  console.log("error is: ", err);

  return errorHandler(res, err);
});

const port = 5000;

db()
  .then(() => {
    console.log(
      `Mongodb connected to ${process.env.MONGODB_URI ?? "mongodb://localhost:27017/pm"}`
    );
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
