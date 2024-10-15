// src/services/TaskService.ts
import { Task } from '../models/Task';
import { TaskGet } from '../models/TaskGet';
import { OverdueTaskReport } from '../models/OverdueTaskReport';
import config from '../Config/config';

const API_URL = `${config.API_BASE_URL}/tasks`;

const handleResponse = async (response: Response): Promise<any> => {
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error ${response.status}: ${errorData.message || 'Network response was not ok'}`);
    }
    return response.json();
};

export const fetchTasks = async (): Promise<TaskGet[]> => {
    const response = await fetch(API_URL);
    return handleResponse(response);
};

export const fetchTaskById = async (id: string): Promise<Task> => {
    const response = await fetch(`${API_URL}/${id}`);
    return handleResponse(response);
};

export const createTask = async (Task: Omit<Task, 'ID'>): Promise<Task> => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Task),
    });
    return handleResponse(response);
};

export const updateTask = async (Task: Task): Promise<Task> => {
    const response = await fetch(`${API_URL}/${Task.ID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Task),
    });
    return handleResponse(response);
};

export const deleteTask = async (id: string ): Promise<void> => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    return handleResponse(response);
};

export const fetchOverdueTaskReport = async (start_date: string, end_date:string): Promise<OverdueTaskReport[]> => {
    const response = await fetch(`${API_URL}/dates`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ start_date, end_date }),
    });
    return handleResponse(response);
}

