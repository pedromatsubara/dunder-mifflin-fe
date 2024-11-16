import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Switch,
} from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function NavBar({ isDarkMode, onThemeSwitch }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Logo isDarkMode={isDarkMode} />
        <Button color="inherit" component={Link} to="/employees">
          List Employees
        </Button>
        <Button color="inherit" component={Link} to="/create-employee">
          Add Employee
        </Button>
        <Box sx={{ ml: "auto", display: "flex", alignItems: "center" }}>
          <Switch
            checked={isDarkMode}
            onChange={onThemeSwitch}
            color="default"
          />
          <Typography variant="body1" sx={{ marginLeft: 1 }}>
            {isDarkMode ? "Dark Mode" : "Light Mode"}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
