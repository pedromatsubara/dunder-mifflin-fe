import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/employees">
          List Employees
        </Button>
        <Button color="inherit" component={Link} to="/create-employee">
          Add Employee
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
