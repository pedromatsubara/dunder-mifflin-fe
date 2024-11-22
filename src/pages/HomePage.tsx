import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = (): JSX.Element => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box mb={3}>
        <Typography variant="h4" textAlign="center">
          Welcome to Dunder Mifflin Management App
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" gap={2}>
        <Button
          color="inherit"
          component={Link}
          to="/employees"
          size="large"
          sx={styles.largeBtn}
        >
          List Employees
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/create-employee"
          size="large"
          sx={styles.largeBtn}
        >
          Add Employee
        </Button>
      </Box>
    </Container>
  );
};

const styles: Record<string, React.CSSProperties> = {
  largeBtn: {
    fontSize: "1.5rem",
    padding: "16px 32px",
  },
};

export default HomePage;
