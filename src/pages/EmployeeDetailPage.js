import { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { getDepartmentHistoryData } from "../api";
import { useParams } from "react-router-dom";
import EmployeeDetail from "../components/EmployeeDetail";
import DepartmentHistoryTable from "../components/tables/DepartmentHistoryTable";

const EmployeeDetailPage = () => {
  const { id } = useParams();
  const [departmentHistory, setDepartmentHistory] = useState([]);

  const fetchDepartmentHistory = async (employeeId) => {
    try {
      const historyData = await getDepartmentHistoryData(employeeId);

      setDepartmentHistory(historyData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDepartmentHistory(id);
  }, [id]);

  return (
    <Container maxWidth="md" sx={{ paddingY: 4 }}>
      <Box mb={3}>
        <Typography variant="h4" textAlign="center">
          Employee Detail Page
        </Typography>
      </Box>
      <EmployeeDetail />
      {departmentHistory && (
        <Box mt={4}>
          <DepartmentHistoryTable departmentHistory={departmentHistory} />
        </Box>
      )}
    </Container>
  );
};

export default EmployeeDetailPage;
