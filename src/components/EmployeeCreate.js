import { useState } from "react";
import { createEmployee } from "../api";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
  Paper,
  CircularProgress,
} from "@mui/material";
import { useError } from "../context/ErrorContext";

const EmployeeCreate = ({ departments }) => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    departmentId: "",
    phone: "",
    address: "",
  });
  const [image, setImage] = useState(null);
  const [loadingCreate, setLoadingCreate] = useState(false);
  const navigate = useNavigate();
  const { showError } = useError();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingCreate(true);
    const data = new FormData();
    for (const key in employee) {
      data.append(key, employee[key]);
    }
    if (image) {
      data.append("image", image);
    }

    try {
      const employeeData = await createEmployee(data);
      navigate(`/employees/${employeeData.id}`);
    } catch (error) {
      showError("Failed to create employee. Please try again.");
    } finally {
      setLoadingCreate(false);
    }
  };

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
            {departments.lenght ? (
              <MenuItem key="loading" disabled>
                Loading departments...
              </MenuItem>
            ) : (
              departments.map((department) => (
                <MenuItem key={department.id} value={department.id}>
                  {department.name}
                </MenuItem>
              ))
            )}
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
          <Box display="flex" alignItems="center" gap={1}>
            <Button variant="outlined" component="label">
              Upload Image
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageChange}
              />
            </Button>
            {image && <Typography variant="body2">{image.name}</Typography>}
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loadingCreate}
            startIcon={loadingCreate && <CircularProgress size={20} />}
          >
            {loadingCreate ? "Creating..." : "Create Employee"}
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
