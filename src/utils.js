import {
  format,
  differenceInYears,
  differenceInMonths,
  differenceInDays,
} from "date-fns";

export const getDateDifference = (date) => {
  if (!date) {
    return "";
  }

  const currentDate = new Date();
  const years = differenceInYears(currentDate, new Date(date));
  const months = differenceInMonths(currentDate, new Date(date)) % 12;
  const days = differenceInDays(currentDate, new Date(date)) % 30;
  const differenceString = `${years}y - ${months}m - ${days}d`;

  return differenceString;
};

export const getDate = (date) => {
  if (!date) {
    return "";
  }

  return format(new Date(date), "MMM d, yyyy");
};
