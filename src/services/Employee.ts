// src/services/EmployeeService.ts
import { Employee } from '../models/Employee';

const API_URL = 'http://localhost:8080/employees';

const handleResponse = async (response: Response): Promise<any> => {
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error ${response.status}: ${errorData.message || 'Network response was not ok'}`);
    }
    return response.json();
};

export const fetchEmployees = async (): Promise<Employee[]> => {
    const response = await fetch(API_URL);
    return handleResponse(response);
};

export const fetchEmployeeById = async (id: string): Promise<Employee> => {
    const response = await fetch(`${API_URL}/${id}`);
    return handleResponse(response);
};

export const createEmployee = async (Employee: Omit<Employee, 'ID'>): Promise<Employee> => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Employee),
    });
    return handleResponse(response);
};

export const updateEmployee = async (Employee: Employee): Promise<Employee> => {
    const response = await fetch(`${API_URL}/${Employee.ID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Employee),
    });
    return handleResponse(response);
};

export const deleteEmployee = async (id: string ): Promise<void> => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    return handleResponse(response);
};

