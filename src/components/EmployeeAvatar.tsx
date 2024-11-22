import { Avatar, Box, Button } from "@mui/material";
import { getImageUrl } from "../api";
import { Employee } from "../types";

interface EmployeeAvatarProps {
  employee: Employee;
  styles: Record<string, React.CSSProperties>;
}

const EmployeeAvatar = ({ employee, styles }: EmployeeAvatarProps): JSX.Element => {
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
          sx={{
            ...styles.buttonInactive,
            "&.Mui-disabled": styles.buttonInactivePseudo,
          }}
          disabled
        >
          Inactive
        </Button>
      )}
    </Box>
  );
};

export default EmployeeAvatar;
