import React, { useCallback, useEffect, useState } from "react";
import EmployeeDetail from "../components/EmployeeDetail";
import DepartmentHistoryTable from "../components/tables/DepartmentHistoryTable";
import { useParams } from "react-router-dom";
import {
  getDepartmentHistoryData,
  getDepartments,
  getEmployeeById,
  updateEmployee,
} from "../api";
import { Container, Box, Typography } from "@mui/material";

const EmployeeDetailPage = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [departments, setDepartments] = useState([]);
  const [departmentHistory, setDepartmentHistory] = useState([]);

  const fetchDepartments = async () => {
    try {
      const departmentsData = await getDepartments();

      setDepartments(departmentsData);
    } catch (error) {
      console.error("Error fetching departments data:", error);
    }
  };

  const fetchDepartmentHistory = async (employeeId) => {
    try {
      const historyData = await getDepartmentHistoryData(employeeId);

      setDepartmentHistory(historyData);
    } catch (error) {
      console.error("Error fetching department history data:", error);
    }
  };

  const fetchEmployees = async (employeeId) => {
    try {
      const employeeData = await getEmployeeById(employeeId);

      setEmployee(employeeData);
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  const handleUpdateDepartment = useCallback(
    async (newDepartmentId) => {
      const employeeData = await updateEmployee(id, {
        departmentId: newDepartmentId,
      });

      const historyData = await getDepartmentHistoryData(id);

      setEmployee(employeeData);
      setDepartmentHistory(historyData);
    },
    [id]
  );

  const handleToggleActive = useCallback(
    async (employeeActive) => {
      const employeeData = await updateEmployee(id, {
        active: employeeActive,
      });
      setEmployee(employeeData);
    },
    [id]
  );

  useEffect(() => {
    fetchDepartments();
  }, []);

  useEffect(() => {
    fetchEmployees(id);
    fetchDepartmentHistory(id);
  }, [id]);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box mb={3}>
        <Typography variant="h4" textAlign="center">
          Employee Details
        </Typography>
      </Box>
      <EmployeeDetail
        employee={employee}
        departments={departments}
        handleUpdateDepartment={handleUpdateDepartment}
        handleToggleActive={handleToggleActive}
      />
      <Box mt={4}>
        <DepartmentHistoryTable departmentHistory={departmentHistory} />
      </Box>
    </Container>
  );
};

export default EmployeeDetailPage;
