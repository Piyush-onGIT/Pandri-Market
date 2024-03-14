import { Response } from "express";
import NotOK from "../response/notOk";
import ApiError from "./ApiError";

const errorHandler = (res: Response, error: ApiError) => {
  return NotOK(res, error.message, error, error.statusCode);
};

export default errorHandler;
