import moment from "moment";

const dateAndTime = () => {
  const currentDateWithTime = moment();
  return currentDateWithTime.format("dddd, MMMM Do YYYY, HH:mm:ss:SSS");
};

export { dateAndTime };
