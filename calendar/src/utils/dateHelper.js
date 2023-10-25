import { parse, isValid, format } from "date-fns";

export const getValidDate = (date) => {
  const parsed = parse(date, "yyyy-MM-dd", new Date());
  if (isValid(parsed)) {
    return formatDate(parsed);
  }
  return null;
};

export const formatDate = (date) => {
  return format(date, "yyyy-MM-dd");
};
export const formatDay = (date) => {
  return format(date, "d");
};
export const formatTime = (date) => {
  return format(date, "hh:mm a")
};

export const formatDateTime = (date) => {
  return format(date, "yyyy-MM-dd hh:mm a");
};
export const formatDateTimeSecond = (date) => {
 return format(date, "yyyy-MM-dd'T'HH:mm:ss'Z'");
};

export const dayNames = [
    { short: "Mon", long: "Monday" },
    { short: "Tue", long: "Tuesday" },
    { short: "Wed", long: "Wednesday" },
    { short: "Thu", long: "Thursday" },
    { short: "Fri", long: "Friday" },
    { short: "Sat", long: "Saturday" },
    { short: "Sun", long: "Sunday" },
  ];
  
