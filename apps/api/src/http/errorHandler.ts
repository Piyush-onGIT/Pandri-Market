import { Response, Request } from "express";
import NotOK from "../response/notOk";
import ApiError from "./ApiError";
import Logger from "../utils/logger";

const errorHandler = (res: Response, error: ApiError, req?: Request) => {
  const copyError = { ...error };
  if (req) {
    console.log(req.url);
    const error1: any = { x: { 1: 2 }, y: 1, z: [1, "2"] };
    Logger.error(`${req.url} -> ${error1}`);
  } else Logger.error(error);
  return NotOK(res, copyError.message, copyError, copyError.statusCode ?? 500);
};

export default errorHandler;
