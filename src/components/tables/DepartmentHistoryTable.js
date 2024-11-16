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
  Skeleton,
} from "@mui/material";
import { getDate } from "../../utils";

const DepartmentHistoryTable = ({ departmentHistory }) => {
  if (!departmentHistory.length) {
    return <DepartmentHistorySkeleton />;
  }

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
                  <TableCell>{getDate(history.date)}</TableCell>
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

const DepartmentHistorySkeleton = () => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={styles.container}>
        <Box sx={styles.titleBox}>
          <Skeleton variant="text" width={180} height={30} />
        </Box>
        <TableContainer>
          <Table aria-label="department history table">
            <TableHead>
              <TableRow>
                <TableCell sx={styles.headerCell}>
                  <Skeleton variant="text" width={100} height={20} />
                </TableCell>
                <TableCell sx={styles.headerCell}>
                  <Skeleton variant="text" width={200} height={20} />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={1}>
                <TableCell>
                  <Skeleton variant="text" width={100} height={20} />
                </TableCell>
                <TableCell>
                  <Skeleton variant="text" width={200} height={20} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

const styles = {
  container: { mt: 3, p: 2, borderRadius: 2 },
  titleBox: {
    mb: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerCell: { fontWeight: "bold" },
};

export default DepartmentHistoryTable;
