import express, { Express } from "express";
import db from "./db/conn";
import * as dotenv from "dotenv";
import "reflect-metadata";
import shopRoutes from "./shops/routes";
import authRoutes from "./authentication/routes";

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(shopRoutes);

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

app.use(authRoutes);
