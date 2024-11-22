import axios, { AxiosError } from "axios";

interface IErrorBase<T> {
  error: Error | AxiosError<T>;
  type: "axios-error" | "stock-error";
}

interface IAxiosError<T> extends IErrorBase<T> {
  error: AxiosError<T>;
  type: "axios-error";
}

interface IStockError extends IErrorBase<never> {
  error: Error;
  type: "stock-error";
}

export const axiosErrorHandler = function <T>(
  callback: (err: IAxiosError<T> | IStockError) => void
) {
  return (error: Error | AxiosError<T>) => {
    if (axios.isAxiosError(error)) {
      callback({
        error: error,
        type: "axios-error",
      });
    } else {
      callback({
        error: error,
        type: "stock-error",
      });
    }
  };
};
