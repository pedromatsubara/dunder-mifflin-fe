import React, { useState } from "react";
import { createEmployee } from "../api";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Paper,
} from "@mui/material";

const EmployeeCreate = ({ departments }) => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    departmentId: "",
    phone: "",
    address: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in employee) {
      data.append(key, employee[key]);
    }
    const employeeData = await createEmployee(data);
    navigate(`/employees/${employeeData.id}`);
  };

  if (!departments) return "Loading...";

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={styles.paper}>
        <Box component="form" onSubmit={handleSubmit} sx={styles.form}>
          <TextField
            name="firstName"
            label="First Name"
            fullWidth
            value={employee.firstName}
            onChange={handleChange}
            required
          />
          <TextField
            name="lastName"
            label="Last Name"
            fullWidth
            value={employee.lastName}
            onChange={handleChange}
            required
          />
          <TextField
            name="departmentId"
            label="Department"
            fullWidth
            value={employee.departmentId}
            onChange={handleChange}
            select
            required
          >
            {departments.map((department) => (
              <MenuItem key={department.id} value={department.id}>
                {department.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name="phone"
            label="Phone"
            fullWidth
            value={employee.phone}
            onChange={handleChange}
          />
          <TextField
            name="address"
            label="Address"
            fullWidth
            value={employee.address}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Create Employee
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

const styles = {
  paper: {
    padding: 4,
    marginTop: 3,
    borderRadius: 2,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
};

export default EmployeeCreate;
