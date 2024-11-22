import axios, { AxiosError } from "axios";
import { axiosErrorHandler } from "./utils/errorHandler";
import { Employee, Department, DepartmentHistory } from "./types/index.js";

const baseURL = "http://localhost:3001";

const api = axios.create({
  baseURL: baseURL,
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    axiosErrorHandler((err) => {
      if (err.type === "axios-error") {
        console.error(
          "Axios error:",
          err.error.response?.data || err.error.message
        );
      } else {
        console.error("Stock error:", err.error.message);
      }
    })(error);
    return Promise.reject(error);
  }
);

export const getDepartments = async (): Promise<Department[]> => {
  try {
    const response = await api.get("/departments");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getEmployees = async (): Promise<Employee[]> => {
  try {
    const response = await api.get("/employees");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getImageUrl = (path: string): string => {
  return `${baseURL}/images/${path}`;
};

export const getEmployeeById = async (id: string): Promise<Employee> => {
  try {
    const response = await api.get(`/employees/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createEmployee = async (employee: FormData): Promise<Employee> => {
  try {
    const response = await api.post(`/employees/`, employee);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateEmployee = async (
  id: string,
  employee: Partial<Employee>
): Promise<Employee> => {
  try {
    const response = await api.put(`/employees/${id}`, employee);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteEmployee = async (id: string): Promise<void> => {
  try {
    await api.delete(`/employees/${id}`);
  } catch (error) {
    throw error;
  }
};

export const getDepartmentHistoryData = async (
  id: string
): Promise<DepartmentHistory[]> => {
  try {
    const response = await api.get(`/department-history/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
