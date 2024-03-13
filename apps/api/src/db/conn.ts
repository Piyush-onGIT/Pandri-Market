import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

export default async function main() {
  await mongoose.connect(
    process.env.MONGODB_URI ?? "mongodb://localhost:27017"
  );
}
