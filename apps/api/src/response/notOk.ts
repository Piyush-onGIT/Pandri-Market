import { Response } from "express";
import { dateAndTime } from "../utils/dateTime";
import { NotOK_ResponseMessage } from "./responseMessages";

const NotOK = (res: Response, entity: string, data: any, status: number) => {
  const message =
    NotOK_ResponseMessage[entity] ?? entity ?? "Something went wrong";

  res.status(status).json({
    status: "Not OK",
    data,
    timestamp: dateAndTime(),
    message: message,
  });
};

export default NotOK;
