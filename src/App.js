import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Container } from "@mui/material";
import EmployeeListPage from "./pages/EmployeeListPage";
import EmployeeCreatePage from "./pages/EmployeeCreatePage";
import EmployeeDetailPage from "./pages/EmployeeDetailPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
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
            <Route path="/create-employee" element={<EmployeeCreatePage />} />
            <Route path="/employees/:id" element={<EmployeeDetailPage />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
