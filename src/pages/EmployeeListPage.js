import React from "react";
import { Box, Container, Typography } from "@mui/material";

const EmployeeListPage = () => {
  return (
    <Container maxWidth="md" sx={{ paddingY: 4 }}>
      <Box mb={3}>
        <Typography variant="h4" textAlign="center">
          Employees
        </Typography>
      </Box>
    </Container>
  );
};

export default EmployeeListPage;
