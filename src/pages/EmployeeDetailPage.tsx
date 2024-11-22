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
import { useError } from "../context/ErrorContext";
import { Employee, Department, DepartmentHistory } from "../types";

const EmployeeDetailPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [departmentHistory, setDepartmentHistory] = useState<
    DepartmentHistory[]
  >([]);
  const { showError } = useError();

  const fetchDepartments = useCallback(async () => {
    try {
      const departmentsData = await getDepartments();

      setDepartments(departmentsData);
    } catch (error) {
      showError("Failed to fetch departments.");
    }
  }, [showError]);

  const fetchDepartmentHistory = useCallback(
    async (employeeId: string) => {
      try {
        const historyData = await getDepartmentHistoryData(employeeId);

        setDepartmentHistory(historyData);
      } catch (error) {
        showError("Failed to fetch department history data.");
      }
    },
    [showError]
  );

  const fetchEmployees = useCallback(
    async (employeeId: string) => {
      try {
        const employeeData = await getEmployeeById(employeeId);

        setEmployee(employeeData);
      } catch (error) {
        showError("Failed to fetch employee data.");
      }
    },
    [showError]
  );

  const handleUpdateDepartment = useCallback(
    async (newDepartmentId: number) => {
      try {
        const employeeData = await updateEmployee(id, {
          departmentId: newDepartmentId,
        });

        const historyData = await getDepartmentHistoryData(id);

        setEmployee(employeeData);
        setDepartmentHistory(historyData);
      } catch (error) {
        showError("Failed to update employee department.");
      }
    },
    [id, showError]
  );

  const handleToggleActive = useCallback(
    async (employeeActive: boolean) => {
      try {
        const employeeData = await updateEmployee(id, {
          active: employeeActive,
        });
        setEmployee(employeeData);
      } catch (error) {
        showError("Failed to update employee status.");
      }
    },
    [id, showError]
  );

  useEffect(() => {
    fetchDepartments();
  }, [fetchDepartments]);

  useEffect(() => {
    if (id) {
      fetchEmployees(id);
      fetchDepartmentHistory(id);
    }
  }, [id, fetchEmployees, fetchDepartmentHistory]);

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
