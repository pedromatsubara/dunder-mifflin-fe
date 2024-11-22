import { Department } from "./department";

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  hireDate: string | null;
  active: boolean | null;
  phone?: string;
  address?: string;
  departmentId: number;
  department?: Department;
}
