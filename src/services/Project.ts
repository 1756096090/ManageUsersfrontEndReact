// src/services/ProjectService.ts
import { Project } from '../models/Project';

const API_URL = 'http://localhost:8080/proyects';

const handleResponse = async (response: Response): Promise<any> => {
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error ${response.status}: ${errorData.message || 'Network response was not ok'}`);
    }
    return response.json();
};

export const fetchProjects = async (): Promise<Project[]> => {
    const response = await fetch(API_URL);
    return handleResponse(response);
};

export const fetchProjectById = async (id: string): Promise<Project> => {
    const response = await fetch(`${API_URL}/${id}`);
    return handleResponse(response);
};

export const createProject = async (Project: Omit<Project, 'ID'>): Promise<Project> => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Project),
    });
    return handleResponse(response);
};

export const updateProject = async (Project: Project): Promise<Project> => {
    const response = await fetch(`${API_URL}/${Project.ID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Project),
    });
    return handleResponse(response);
};

export const deleteProject = async (id: string ): Promise<void> => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    return handleResponse(response);
};

