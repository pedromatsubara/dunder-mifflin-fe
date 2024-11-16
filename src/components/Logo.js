import { Link } from "react-router-dom";
import { Box } from "@mui/material";

function Logo({ isDarkMode }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <img
          src={`/images/logo-${isDarkMode ? "dark" : "light"}.jpg`}
          alt="Dunder Mifflin Logo"
          style={{ width: "90px", marginTop: "5px", marginRight: "10px" }}
        />
      </Link>
    </Box>
  );
}

export default Logo;
