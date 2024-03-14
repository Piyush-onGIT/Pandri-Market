import express, { Express, NextFunction, Request, Response } from "express";
import db from "./db/conn";
import * as dotenv from "dotenv";
import "reflect-metadata";
import shopRoutes from "./shops/routes";
import errorHandler from "./http/errorHandler";

dotenv.config();

export interface CustomRequest extends Request {
  user: any;
}

const app: Express = express();
app.use(express.json());
app.use(shopRoutes);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: any, _: any, res: Response, __: NextFunction) => {
  return errorHandler(res, err);
});

const port = 5000;

db()
  .then(() => {
    console.log(
      `Mongodb connected to ${process.env.MONGODB_URI ?? "mongodb://localhost:27017"}`
    );
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
