import { Response } from "express";
import { dateAndTime } from "../utils/dateTime";
import { NotOK_ResponseMessage } from "./responseMessages";

const NotOK = (res: Response, entity: string, data: any, status: number) => {
  res.status(status).json({
    status: "Not OK",
    data,
    timestamp: dateAndTime(),
    message: NotOK_ResponseMessage[entity],
  });
};

export default NotOK;
