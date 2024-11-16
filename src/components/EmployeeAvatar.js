import { Avatar } from "@mui/material";
import { getImageUrl } from "../api";

const EmployeeAvatar = ({ employee, style }) => {
  return (
    <Avatar
      alt={`${employee.firstName} ${employee.lastName}`}
      src={getImageUrl(`employee-${employee.id}.jpg`)}
      sx={style}
    />
  );
};

export default EmployeeAvatar;
