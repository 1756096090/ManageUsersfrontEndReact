// src/components/UserCrud.tsx
import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../../models/User';
import { UserController } from '../../controllers/User';
import UserListView from '../../views/User';

const UserCrud: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [controller] = useState(new UserController());
    const navigate = useNavigate(); 

    const loadUsers = useCallback(async () => {
        try {
            const data = await controller.getUsers();
            setUsers(data);
        } catch (error) {
            console.error("Failed to load users", error);
        }
    }, [controller]);

    useEffect(() => { 
        loadUsers();
    }, [loadUsers]);

    const handleCreate = () => {
        navigate('/users/edit/new'); 
    };

    const handleEdit = (id: string) => {
        navigate(`/users/edit/${id}`); 
    };

    const handleDelete = async (id: string) => {
        try {
            await controller.removeUser(id);
            await loadUsers();
        } catch (error) {
            console.error("Failed to delete user", error);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Manejo de usuarios</h1>

            <div className="mb-4">
                <button
                    onClick={handleCreate}
                    className="bg-blue-500 text-white p-2"
                >
                    Crear Usuario
                </button>
            </div>

            <UserListView users={users} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default UserCrud;
