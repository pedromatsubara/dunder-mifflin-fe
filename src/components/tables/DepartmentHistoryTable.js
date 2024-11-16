import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Container,
  Box,
} from "@mui/material";

const DepartmentHistoryTable = ({ departmentHistory }) => {
  if (!departmentHistory) return "Loading...";

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={styles.container}>
        <Box sx={styles.titleBox}>
          <Typography variant="h6" component="div">
            Department History
          </Typography>
        </Box>
        <TableContainer>
          <Table aria-label="department history table">
            <TableHead>
              <TableRow>
                <TableCell sx={styles.headerCell}>Date</TableCell>
                <TableCell sx={styles.headerCell}>Department Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {departmentHistory.map((history, index) => (
                <TableRow key={index}>
                  <TableCell>{history.date}</TableCell>
                  <TableCell>
                    {history.Department ? history.Department.name : ""}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

const styles = {
  container: { mt: 3, p: 2, borderRadius: 2 },
  titleBox: { mb: 2, textAlign: "center" },
  headerCell: { fontWeight: "bold" },
};

export default DepartmentHistoryTable;
