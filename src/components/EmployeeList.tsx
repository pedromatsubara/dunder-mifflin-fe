import { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  Paper,
  Skeleton,
} from "@mui/material";
import { deleteEmployee, getEmployees } from "../api";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import { getDate, getDateDifference } from "../utils";
import EmployeeAvatar from "./EmployeeAvatar";
import { useError } from "../context/ErrorContext";
import { Employee } from "../types";

function EmployeeList() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { showError } = useError();

  const fetchEmployees = useCallback(async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
      setLoading(false);
    } catch (error) {
      showError("Failed to fetch employees.");
    }
  }, [showError]);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  const onDelete = async (id: number) => {
    try {
      await deleteEmployee(String(id));
      setEmployees((prev) => prev.filter((employee) => employee.id !== id));
    } catch (error) {
      showError("Failed to delete employee. Please try again.");
    }
  };

  return (
    <Container>
      {loading
        ? Array.from(new Array(3)).map((item, index) => (
            <SkeletonEmployeeCard key={index} />
          ))
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

interface EmployeeCardProps {
  employee: Employee;
  onDelete: (id: number) => void;
}

const EmployeeCard = ({ employee, onDelete }: EmployeeCardProps) => (
  <Paper key={employee.id} elevation={3} sx={styles.paper}>
    <EmployeeAvatar employee={employee} styles={styles} />
    <Box flexGrow={1} display="flex" flexDirection="column" gap={1}>
      <Typography variant="h6" noWrap color="textPrimary">
        {employee.firstName} {employee.lastName}
      </Typography>
      <Typography variant="body2" color="textSecondary" noWrap>
        ({employee.Department?.name || ""})
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
        sx={{"&:hover": styles.deleteButtonPseudo}}
      >
        Delete
      </Button>
    </Box>
  </Paper>
);

const SkeletonEmployeeCard = () => (
  <Paper elevation={3} sx={styles.paper}>
    <Skeleton variant="circular" sx={styles.avatar} />
    <Box flexGrow={1} display="flex" flexDirection="column" gap={1}>
      <Skeleton variant="text" width="60%" height={30} />
      <Skeleton variant="text" width="40%" />
      <Skeleton variant="text" width="30%" />
      <Skeleton variant="text" width="50%" />
    </Box>
    <Box display="flex" flexDirection="column" gap={1}>
      <Skeleton variant="rectangular" width={80} height={36} />
      <Skeleton variant="rectangular" width={80} height={36} />
    </Box>
  </Paper>
);

const styles: Record<string, React.CSSProperties> = {
  buttonInactive: {
    marginTop: -3,
  },
  buttonInactivePseudo: {
    backgroundColor: "#d32f2f",
    color: "white",
  },
  paper: {
    display: "flex",
    alignItems: "center",
    padding: 2,
    marginBottom: 3,
    borderRadius: 2,
    gap: 2,
  },
  avatar: {
    width: 120,
    height: 120,
    border: "2px solid",
    borderColor: "primary.main",
  },
  deleteButtonPseudo: {
    backgroundColor: "error.dark",
  },
};

export default EmployeeList;
