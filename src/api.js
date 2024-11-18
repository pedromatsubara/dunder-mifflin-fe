import axios from "axios";

const baseURL = "http://localhost:3001";

const api = axios.create({
  baseURL: baseURL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export const getDepartments = async () => {
  try {
    const response = await api.get(`/departments`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch departments:", error);
    throw error;
  }
};

export const getImageUrl = (path) => {
  return `${baseURL}/images/${path}`;
};

export const getEmployees = async () => {
  try {
    const response = await api.get("/employees");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch employees:", error);
    throw error;
  }
};

export const getEmployeeById = async (id) => {
  try {
    const response = await api.get(`/employees/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch employee with ID ${id}:`, error);
    throw error;
  }
};

export const createEmployee = async (employee) => {
  try {
    const response = await api.post(`/employees/`, employee);
    return response.data;
  } catch (error) {
    console.error("Failed to create employee:", error);
    throw error;
  }
};

export const updateEmployee = async (id, employee) => {
  try {
    const response = await api.put(`/employees/${id}`, employee);
    return response.data;
  } catch (error) {
    console.error(`Failed to update employee with ID ${id}:`, error);
    throw error;
  }
};

export const deleteEmployee = async (id) => {
  try {
    const response = await api.delete(`/employees/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to delete employee with ID ${id}:`, error);
    throw error;
  }
};

export const getDepartmentHistoryData = async (id) => {
  try {
    const response = await api.get(`/department-history/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      `Failed to fetch department history for employee ID ${id}:`,
      error
    );
    throw error;
  }
};
