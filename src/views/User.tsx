// src/views/UserListView.tsx
import React from 'react';
import { User } from '../models/User';

interface UserListViewProps {
    users: User[];
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

const UserListView: React.FC<UserListViewProps> = ({ users, onEdit, onDelete }) => {
    return (
        <table className="min-w-full border-collapse border border-gray-200">
            <thead>
                <tr>
                    <th className="border border-gray-200 p-2">ID</th>
                    <th className="border border-gray-200 p-2">Name</th>
                    <th className="border border-gray-200 p-2">Email</th>
                    <th className="border border-gray-200 p-2">Age</th>
                    <th className="border border-gray-200 p-2">Password</th>
                    <th className="border border-gray-200 p-2">Actions</th>
                    
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.ID}>
                        <td className="border border-gray-200 p-2">{user.ID}</td>
                        <td className="border border-gray-200 p-2">{user.Name}</td>
                        <td className="border border-gray-200 p-2">{user.Email}</td>
                        <td className="border border-gray-200 p-2">{user.Age}</td>
                        <td className="border border-gray-200 p-2">{user.Password}</td>
                        <td className="border border-gray-200 p-2">
                            <button
                                onClick={() => onEdit(user.ID || 0)}
                                className="bg-yellow-500 text-white p-1 mr-1"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => onDelete(user.ID || 0)}
                                className="bg-red-500 text-white p-1"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserListView;
