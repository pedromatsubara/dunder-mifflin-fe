import { Avatar, Box, Button } from "@mui/material";
import { getImageUrl } from "../api";

const EmployeeAvatar = ({ employee, styles }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Avatar
        alt={`${employee.firstName} ${employee.lastName}`}
        src={getImageUrl(`employee-${employee.id}.jpg`)}
        sx={styles.avatar}
      />
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
    </Box>
  );
};

export default EmployeeAvatar;
