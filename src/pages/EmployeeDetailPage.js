import { Box, Container, Typography } from "@mui/material";
import EmployeeDetail from "../components/EmployeeDetail";

const EmployeeDetailPage = () => {
  return (
    <Container maxWidth="md" sx={{ paddingY: 4 }}>
      <Box mb={3}>
        <Typography variant="h4" textAlign="center">
          Employee Detail Page
        </Typography>
      </Box>
      <EmployeeDetail />
    </Container>
  );
};

export default EmployeeDetailPage;
