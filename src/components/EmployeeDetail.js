import React, { useEffect, useState } from "react";
import { getDepartments, getEmployeeById } from "../api";
import {
  Avatar,
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  Typography,
  Paper,
} from "@mui/material";
import { useParams } from "react-router-dom";

const EmployeeDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [departments, setDepartments] = useState([]);
  const [newDepartmentId, setNewDepartmentId] = useState(
    employee?.departmentId
  );

  const handleChangeDepartment = (id) => {
    setNewDepartmentId(id);
  };

  const handleUpdateDepartment = async (newDepartmentId) => {};
  const handleToggleActive = async (employeeActive) => {};

  const fetchData = async (employeeId) => {
    try {
      const employeeData = await getEmployeeById(employeeId);
      const departmentsData = await getDepartments();

      setEmployee(employeeData);
      setDepartments(departmentsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  if (!employee) return "Loading...";

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={styles.paper}>
        <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
          <Avatar alt={employee.firstName} sx={styles.avatar} />
          <Typography variant="h5" sx={{ mt: 2 }}>
            {employee.firstName} {employee.lastName}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {employee.Department?.name || ""}
          </Typography>
        </Box>

        <Box mb={3}>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={1}
            sx={{ py: 0.5 }}
          >
            <Typography
              variant="subtitle2"
              color="textPrimary"
              sx={{ fontWeight: 500 }}
            >
              Employee ID:
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {employee.id}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={1}
            sx={{ py: 0.5 }}
          >
            <Typography
              variant="subtitle2"
              color="textPrimary"
              sx={{ fontWeight: 500 }}
            >
              Telephone:
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {employee.phone}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={1}
            sx={{ py: 0.5 }}
          >
            <Typography
              variant="subtitle2"
              color="textPrimary"
              sx={{ fontWeight: 500 }}
            >
              Address:
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {employee.address}
            </Typography>
          </Box>
        </Box>

        <Typography variant="body1" color="textPrimary" mb={1}>
          Update Department:
        </Typography>
        <Box display="flex" gap={1} alignItems="center" mb={3}>
          <Select
            labelId="department-select-label"
            id="department-select"
            value={newDepartmentId}
            size="small"
            sx={styles.select}
            onChange={(e) => handleChangeDepartment(e.target.value)}
          >
            {departments.map((department) => (
              <MenuItem key={department.id} value={department.id}>
                {department.name}
              </MenuItem>
            ))}
          </Select>
          <Button
            variant="contained"
            color="success"
            disabled={employee.departmentId === newDepartmentId}
            onClick={() => handleUpdateDepartment(newDepartmentId)}
          >
            Update
          </Button>
        </Box>

        <Typography variant="body1" color="textPrimary">
          Hire Date:
        </Typography>
        <Typography variant="body2" color="textSecondary">
          ({employee.hireDate})
        </Typography>

        <Button
          variant="contained"
          onClick={() => handleToggleActive(!employee.active)}
          color={employee.active ? "error" : "success"}
          sx={styles.toggleActiveButton}
        >
          {employee.active ? "Deactivate" : "Activate"}
        </Button>
      </Paper>
    </Container>
  );
};

const styles = {
  toggleActiveButton: {
    marginTop: 1,
    marginLeft: -1,
  },
  paper: {
    padding: 4,
    borderRadius: 2,
  },
  avatar: {
    width: 120,
    height: 120,
    marginBottom: 2,
  },
  select: {
    minWidth: 180,
  },
};

export default EmployeeDetail;
