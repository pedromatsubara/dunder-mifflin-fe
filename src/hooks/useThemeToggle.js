import { useState, useMemo } from "react";
import { darkTheme, lightTheme } from "../theme";

export function useThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeSwitch = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = useMemo(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode]
  );

  return { theme, isDarkMode, handleThemeSwitch };
}
