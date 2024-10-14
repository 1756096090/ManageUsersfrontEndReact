import { Employee } from '../models/Employee';
import {
  fetchEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  fetchEmployeeById,
} from '../services/Employee';

export class EmployeeController {
  async getEmployees(): Promise<Employee[]> {
    try {
      return await fetchEmployees();
    } catch (error) {
      console.error('Failed to fetch Employees:', error);
      throw new Error('Could not fetch Employees.');
    }
  }

  async getEmployee(id: string): Promise<Employee> {
    try {
      return await fetchEmployeeById(id);
    } catch (error) {
      console.error(`Failed to fetch Employee with ID ${id}:`, error);
      throw new Error('Could not fetch Employee.');
    }
  }

  async addEmployee(Employee: Omit<Employee, 'id'>): Promise<Employee> {
    try {
      return await createEmployee(Employee);
    } catch (error) {
      console.error('Failed to create Employee:', error);
      throw new Error('Could not create Employee.');
    }
  }

  async editEmployee(Employee: Employee): Promise<Employee> {
    try {
      return await updateEmployee(Employee);
    } catch (error) {
      console.error('Failed to update Employee:', error);
      throw new Error('Could not update Employee.');
    }
  }

  async removeEmployee(id: string): Promise<void> {
    try {
      await deleteEmployee(id);
    } catch (error) {
      console.error(`Failed to delete Employee with ID ${id}:`, error);
      throw new Error('Could not delete Employee.');
    }
  }


}
