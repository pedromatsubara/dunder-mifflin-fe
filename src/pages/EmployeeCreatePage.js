import { useCallback, useEffect, useState } from "react";
import EmployeeCreate from "../components/EmployeeCreate";
import { getDepartments } from "../api";
import { Container, Box, Typography } from "@mui/material";
import { useError } from "../context/ErrorContext";

const EmployeeCreatePage = () => {
  const [departments, setDepartments] = useState([]);
  const { showError } = useError();

  const fetchDepartments = useCallback(async () => {
    try {
      const departmentsData = await getDepartments();
      setDepartments(departmentsData);
    } catch (error) {
      showError("Failed to fetch departments.");
    }
  }, [showError]);

  useEffect(() => {
    fetchDepartments();
  }, [fetchDepartments]);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box mb={3}>
        <Typography variant="h4" textAlign="center">
          Create New Employee
        </Typography>
      </Box>
      <EmployeeCreate departments={departments} />
    </Container>
  );
};

export default EmployeeCreatePage;
