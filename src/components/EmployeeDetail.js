import { useState } from "react";
import { getDate, getDateDifference } from "../utils";
import {
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  Typography,
  Paper,
} from "@mui/material";
import EmployeeAvatar from "./EmployeeAvatar";

const EmployeeDetail = ({
  employee,
  departments,
  handleUpdateDepartment,
  handleToggleActive,
}) => {
  const [newDepartmentId, setNewDepartmentId] = useState(
    employee?.departmentId
  );

  const handleChangeDepartment = (id) => {
    setNewDepartmentId(id);
  };

  if (!employee) return "Loading...";

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={styles.paper}>
        <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
          <EmployeeAvatar employee={employee} />
          {!employee.active && (
            <Button
              variant="contained"
              size="small"
              sx={styles.buttonInactive}
              disabled
            >
              Inactive
            </Button>
          )}
          <Typography variant="h5" sx={{ mt: 2 }}>
            {employee.firstName} {employee.lastName}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {employee.Department?.name || ""}
          </Typography>
        </Box>

        <Box mb={3}>
          <InfoRow label="Employee ID" value={employee.id} />
          <InfoRow label="Telephone" value={employee.phone} />
          <InfoRow label="Address" value={employee.address} />
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
          {getDate(employee.hireDate)}
        </Typography>
        <Typography variant="body2" color="textSecondary" mb={3}>
          {getDateDifference(employee.hireDate)}
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

const InfoRow = ({ label, value }) => (
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
      {label}:
    </Typography>
    <Typography variant="body2" color="textSecondary">
      {value}
    </Typography>
  </Box>
);

const styles = {
  buttonInactive: {
    marginTop: -1,
    "&.Mui-disabled": {
      backgroundColor: "#d32f2f",
      color: "white",
    },
  },
  toggleActiveButton: {
    marginTop: 1,
    marginLeft: -1,
  },
  paper: {
    padding: 4,
    borderRadius: 2,
  },
  select: {
    minWidth: 180,
  },
};

export default EmployeeDetail;
