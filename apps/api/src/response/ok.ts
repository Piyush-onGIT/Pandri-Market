import { Response } from "express";
// import {OK_ResponseMessage} from '../constants/responseMessages';
// import {ISuccessMessage} from '../types/response/success.types';
import { dateAndTime } from "../utils/dateTime";
import { OK_ResponseMessage } from "./responseMessages";

const OK = (res: Response, entity: string, data: any, status: number) => {
  res.status(status).json({
    status: "OK",
    data,
    timestamp: dateAndTime(),
    message: OK_ResponseMessage[entity],
  });
};

export default OK;
