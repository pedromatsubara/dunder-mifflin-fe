import React from "react";
import { Box, Container, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Container maxWidth="md" sx={{ paddingY: 4 }}>
      <Box mb={3}>
        <Typography variant="h4" textAlign="center">
          Home Page
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
