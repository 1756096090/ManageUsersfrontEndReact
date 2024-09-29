// src/services/userService.ts
import { User } from '../models/User';

const API_URL = 'http://localhost:8080/users';

const handleResponse = async (response: Response): Promise<any> => {
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error ${response.status}: ${errorData.message || 'Network response was not ok'}`);
    }
    return response.json();
};

export const fetchUsers = async (): Promise<User[]> => {
    const response = await fetch(API_URL);
    return handleResponse(response);
};

export const fetchUserById = async (id: number): Promise<User> => {
    const response = await fetch(`${API_URL}/${id}`);
    return handleResponse(response);
};

export const createUser = async (user: Omit<User, 'ID'>): Promise<User> => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return handleResponse(response);
};

export const updateUser = async (user: User): Promise<User> => {
    const response = await fetch(`${API_URL}/${user.ID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return handleResponse(response);
};

export const deleteUser = async (id: number): Promise<void> => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    return handleResponse(response);
};
