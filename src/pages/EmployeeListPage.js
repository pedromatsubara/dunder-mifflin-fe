import React from "react";
import { Box, Container, Typography } from "@mui/material";
import EmployeeList from "../components/EmployeeList";

const EmployeeListPage = () => {
  return (
    <Container maxWidth="md" sx={{ paddingY: 4 }}>
      <Box mb={3}>
        <Typography variant="h4" textAlign="center">
          Employees
        </Typography>
      </Box>
      <EmployeeList />
    </Container>
  );
};

export default EmployeeListPage;
