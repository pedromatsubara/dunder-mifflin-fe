import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeToggle } from "./hooks/useThemeToggle";
import EmployeeListPage from "./pages/EmployeeListPage";
import EmployeeCreatePage from "./pages/EmployeeCreatePage";
import EmployeeDetailPage from "./pages/EmployeeDetailPage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import { ErrorProvider } from "./context/ErrorContext";
import ErrorMessage from "./components/ErrorMessage";

const App = (): JSX.Element => {
  const { theme, isDarkMode, handleThemeSwitch } = useThemeToggle();

  return (
    <ErrorProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <NavBar isDarkMode={isDarkMode} onThemeSwitch={handleThemeSwitch} />
          <Box
            display="flex"
            justifyContent="center"
            sx={{
              minHeight: "100vh",
              paddingTop: 3,
            }}
          >
            <Container maxWidth="md">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/employees" element={<EmployeeListPage />} />
                <Route
                  path="/create-employee"
                  element={<EmployeeCreatePage />}
                />
                <Route path="/employees/:id" element={<EmployeeDetailPage />} />
              </Routes>
            </Container>
          </Box>
          <ErrorMessage />
        </Router>
      </ThemeProvider>
    </ErrorProvider>
  );
};

export default App;
