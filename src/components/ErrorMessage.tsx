import { useEffect } from "react";
import { useError } from "../context/ErrorContext";
import { Snackbar, Alert } from "@mui/material";

const ErrorMessage = (): JSX.Element | null => {
  const { errorMessage, handleClose, open } = useError();

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        handleClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [errorMessage, handleClose]);

  if (!errorMessage) return null;

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert severity="error" onClose={handleClose}>
        {errorMessage}
      </Alert>
    </Snackbar>
  );
};

export default ErrorMessage;