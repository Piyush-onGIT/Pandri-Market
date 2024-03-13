import { Response } from "express";
import NotOK from "../response/notOk";

const errorHandler = (
  res: Response,
  error: Error,
  type: string = "Internal Server Error",
  statusCode: number = 500
) => {
  return NotOK(res, type, error, statusCode);
};

export default errorHandler;
