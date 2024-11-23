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

interface NavBarProps {
  isDarkMode: boolean;
  onThemeSwitch: () => void;
}

const NavBar = ({ isDarkMode, onThemeSwitch }: NavBarProps): JSX.Element => {
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
        <Box sx={styles.box}>
          <Switch
            checked={isDarkMode}
            onChange={onThemeSwitch}
            color="default"
          />
          <Typography variant="body1" sx={styles.typography}>
            {isDarkMode ? "Dark Mode" : "Light Mode"}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const styles: Record<string, React.CSSProperties> = {
  box: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center"
  },
  typography: {
    marginLeft: 1
  }
};

export default NavBar;
