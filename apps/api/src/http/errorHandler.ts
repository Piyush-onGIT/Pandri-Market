import { Response, Request } from "express";
import NotOK from "../response/notOk";
import ApiError from "./ApiError";
import Logger from "../utils/logger";

const errorHandler = (res: Response, error: ApiError, req?: Request) => {
  const copyError = { ...error };
  if (req) {
    console.log(req.url);
    Logger.error(error);
  } else Logger.error(error);
  return NotOK(res, copyError.message, copyError, copyError.statusCode ?? 500);
};

export default errorHandler;
