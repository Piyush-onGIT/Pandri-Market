import mongoose from "mongoose";

export default async function main() {
  await mongoose.connect(
    process.env.MONGODB_URI ?? "mongodb://localhost:27017"
  );
}