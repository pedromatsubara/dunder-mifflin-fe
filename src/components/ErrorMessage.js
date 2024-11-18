import React, { useEffect } from "react";
import { useError } from "../context/ErrorContext";
import { Snackbar, Alert } from "@mui/material";

const ErrorMessage = () => {
  const { error, clearError } = useError();

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        clearError();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error, clearError]);

  if (!error) return null;

  return (
    <Snackbar
      open={!!error}
      autoHideDuration={5000}
      onClose={() => clearError()}
    >
      <Alert severity="error" onClose={() => clearError()}>
        {error}
      </Alert>
    </Snackbar>
  );
};

export default ErrorMessage;
