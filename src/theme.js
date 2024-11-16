import { createTheme } from "@mui/material/styles";

const lightPalette = {
  mode: "light",
  primary: {
    main: "#005BB5",
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: "#FFD700",
  },
  background: {
    default: "#F7F7F7",
    paper: "#FFFFFF",
  },
  text: {
    primary: "#000000",
    secondary: "#5F6368",
  },
};

const darkPalette = {
  mode: "dark",
  primary: {
    main: "#8AB4F8",
    contrastText: "#000000",
  },
  secondary: {
    main: "#FFD700",
  },
  background: {
    default: "#121212",
    paper: "#1E1E1E",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#B0B0B0",
  },
};

const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
        textTransform: "none",
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: "#005BB5",
      },
    },
  },
};

export const lightTheme = createTheme({
  palette: lightPalette,
  components,
});

export const darkTheme = createTheme({
  palette: darkPalette,
  components,
});
