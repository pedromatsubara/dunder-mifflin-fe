import { useEffect, useState } from "react";
import { getDate, getDateDifference } from "../utils";
import {
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  Typography,
  Paper,
  Skeleton,
} from "@mui/material";
import EmployeeAvatar from "./EmployeeAvatar";

const EmployeeDetail = ({
  employee,
  departments,
  handleUpdateDepartment,
  handleToggleActive,
}) => {
  const [newDepartmentId, setNewDepartmentId] = useState(1);

  const handleChangeDepartment = (id) => {
    setNewDepartmentId(id);
  };

  useEffect(() => {
    if (employee) {
      setNewDepartmentId(employee.departmentId);
    }
  }, [employee]);

  if (!employee || !departments.length) {
    return (
      <Container maxWidth="sm">
        <SkeletonEmployeeDetail />
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={styles.paper}>
        <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
          <EmployeeAvatar employee={employee} style={styles.avatar} />
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

        <Box mb={3} display="flex" justifyContent="space-between">
          <Box>
            <InfoRow label="Employee ID" value={employee.id} />
            <InfoRow label="Telephone" value={employee.phone} />
            <InfoRow label="Address" value={employee.address} />
          </Box>

          <Box textAlign="right">
            <Typography variant="body1" color="textPrimary">
              Hire Date:
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {getDate(employee.hireDate)}
            </Typography>
            <Typography variant="body2" color="textSecondary">
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

const SkeletonEmployeeDetail = () => (
  <Paper elevation={3} sx={styles.paper}>
    <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
      <Skeleton variant="circular" sx={styles.avatar} />
      <Skeleton variant="text" width="60%" height={30} sx={{ mt: 2 }} />
      <Skeleton variant="text" width="40%" />
    </Box>

    <Box mb={5}>
      <Skeleton variant="text" width="100%" height={24} sx={{ mb: 1 }} />
      <Skeleton variant="text" width="100%" height={24} sx={{ mb: 1 }} />
      <Skeleton variant="text" width="100%" height={24} />
    </Box>

    <Skeleton variant="text" width="100%" height={24} sx={{ mb: 1 }} />
    <Box display="flex" gap={1} alignItems="center" mb={3}>
      <Skeleton variant="rectangular" sx={{ flexGrow: 1, height: 40 }} />
      <Skeleton variant="rectangular" width={80} height={40} />
    </Box>
  </Paper>
);

const styles = {
  buttonInactive: {
    marginTop: -3,
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
  avatar: {
    width: 120,
    height: 120,
    border: "2px solid",
    borderColor: "primary.main",
  },
  select: {
    minWidth: 180,
    flexGrow: 1,
  },
};

export default EmployeeDetail;
