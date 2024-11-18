import React, { createContext, useContext, useState, useCallback } from "react";
import { Snackbar, Alert } from "@mui/material";

const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [open, setOpen] = useState(false);

  const showError = useCallback((message) => {
    setErrorMessage(message);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <ErrorContext.Provider value={{ showError }}>
      {children}
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </ErrorContext.Provider>
  );
};

export const useError = () => useContext(ErrorContext);
