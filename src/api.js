import axios from "axios";

const baseURL = "http://localhost:3001";

const api = axios.create({
  baseURL: baseURL,
});

export const getDepartments = async () => {
  const response = await api.get(`/departments`);
  return response.data;
};

export const getImageUrl = (path) => {
  return `${baseURL}/uploads/${path}`;
};

export const getEmployees = async () => {
  const response = await api.get("/employees");
  return response.data;
};

export const getEmployeeById = async (id) => {
  const response = await api.get(`/employees/${id}`);
  return response.data;
};

export const createEmployee = async (employee) => {
  const response = await api.post(`/employees/`, employee);
  return response.data;
};

export const deleteEmployee = async (id) => {
  const response = await api.delete(`/employees/${id}`);
  return response.data;
};

export const getDepartmentHistoryData = async (id) => {
  const response = await api.get(`/department-history/${id}`);
  return response.data;
};
