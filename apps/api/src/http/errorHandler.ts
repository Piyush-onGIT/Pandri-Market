import { Response } from "express";
import NotOK from "../response/notOk";
import ApiError from "./ApiError";
import Logger from "../utils/logger";

const errorHandler = (res: Response, error: ApiError) => {
  const copyError: ApiError = new ApiError(error.statusCode, error.message);
  copyError.stack = error.stack;
  copyError.data = error.data;
  copyError.success = error.success;
  // copyError.errors = [...error.errors];

  Logger.error(error);
  return NotOK(res, copyError.message, copyError, copyError.statusCode ?? 500);
};

export default errorHandler;
