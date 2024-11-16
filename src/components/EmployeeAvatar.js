import { Avatar } from "@mui/material";
import { getImageUrl } from "../api";

const EmployeeAvatar = ({ employee }) => {
  return (
    <Avatar
      alt={`${employee.firstName} ${employee.lastName}`}
      src={getImageUrl(`employee-${employee.id}.jpg`)}
      sx={styles.avatar}
    />
  );
};

const styles = {
  avatar: {
    width: 120,
    height: 120,
    border: "2px solid",
    borderColor: "primary.main",
  },
};

export default EmployeeAvatar;
