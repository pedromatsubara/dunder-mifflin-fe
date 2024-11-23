import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface ErrorContextType {
  errorMessage: string;
  open: boolean;
  showError: (message: string) => void;
  handleClose: () => void;
}

interface ErrorProviderProps {
  children: ReactNode;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const ErrorProvider = ({ children }: ErrorProviderProps) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const showError = useCallback((message: string) => {
    setErrorMessage(message);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <ErrorContext.Provider value={{ errorMessage, open, showError, handleClose }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = (): ErrorContextType => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("useError must be used within an ErrorProvider");
  }
  return context;
};
