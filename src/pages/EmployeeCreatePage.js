import { useEffect, useState } from "react";
import EmployeeCreate from "../components/EmployeeCreate";
import { getDepartments } from "../api";
import { Container, Box, Typography } from "@mui/material";

const EmployeeCreatePage = () => {
  const [departments, setDepartments] = useState([]);

  const fetchDepartments = async () => {
    try {
      const departmentsData = await getDepartments();
      setDepartments(departmentsData);
    } catch (error) {
      console.error("Error fetching employee details:", error);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

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
