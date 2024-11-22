import { Department } from "./department";

export interface DepartmentHistory {
  id: number;
  date: string;
  employeeId: number;
  departmentId: number;
  Department?: Department;
}
