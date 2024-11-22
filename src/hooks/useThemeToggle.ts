import { useState, useMemo } from "react";
import { darkTheme, lightTheme } from "../theme";
import { Theme } from "@mui/material/styles";

export function useThemeToggle(): {
  theme: Theme;
  isDarkMode: boolean;
  handleThemeSwitch: () => void;
} {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleThemeSwitch = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = useMemo<Theme>(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode]
  );

  return { theme, isDarkMode, handleThemeSwitch };
}
