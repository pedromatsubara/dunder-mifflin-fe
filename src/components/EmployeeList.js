import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Avatar,
  Container,
  Paper,
} from "@mui/material";
import { getEmployees, getImageUrl } from "../api";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import { getDate, getDateDifference } from "../utils";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmployees = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const onDelete = async (id) => {};

  return (
    <Container>
      {loading
        ? "Loading..."
        : employees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              onDelete={onDelete}
            />
          ))}
    </Container>
  );
}

const EmployeeCard = ({ employee, onDelete }) => (
  <Paper key={employee.id} elevation={3} sx={styles.paper}>
    <Avatar
      alt={`${employee.firstName} ${employee.lastName}`}
      src={getImageUrl(`employee-${employee.id}.jpg`)}
      sx={styles.avatar}
    />
    <Box flexGrow={1} display="flex" flexDirection="column" gap={1}>
      <Typography variant="h6" noWrap color="textPrimary">
        {employee.firstName} {employee.lastName}
      </Typography>
      <Typography variant="body2" color="textSecondary" noWrap>
        ({employee.Department ? employee.Department.name : ""})
      </Typography>
      <Typography variant="body1" color="textPrimary">
        Hire Date:
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {getDate(employee.hireDate)} ({getDateDifference(employee.hireDate)})
      </Typography>
    </Box>

    <Box display="flex" flexDirection="column" gap={1}>
      <Button
        variant="outlined"
        startIcon={<InfoIcon />}
        component={Link}
        to={`/employees/${employee.id}`}
      >
        Details
      </Button>
      <Button
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={() => onDelete(employee.id)}
        sx={styles.deleteButton}
      >
        Delete
      </Button>
    </Box>
  </Paper>
);

const styles = {
  paper: {
    display: "flex",
    alignItems: "center",
    padding: 2,
    marginBottom: 3,
    borderRadius: 2,
  },
  avatar: {
    width: 100,
    height: 100,
    marginRight: 2,
  },
  deleteButton: {
    "&:hover": {
      backgroundColor: "error.dark",
    },
  },
};

export default EmployeeList;
