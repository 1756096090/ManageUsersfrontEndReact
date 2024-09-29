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

    useEffect(() => { // Se usa despues de que se inicializa el componente
        loadUsers();
    }, [loadUsers]);

    const handleCreate = () => {
        navigate('/users/edit/new'); 
    };

    const handleEdit = (id: number) => {
        navigate(`/users/edit/${id}`); 
    };

    const handleDelete = async (id: number) => {
        try {
            await controller.removeUser(id);
            await loadUsers();
        } catch (error) {
            console.error("Failed to delete user", error);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">User Management</h1>

            <div className="mb-4">
                <button
                    onClick={handleCreate}
                    className="bg-blue-500 text-white p-2"
                >
                    Create User
                </button>
            </div>

            <UserListView users={users} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default UserCrud;
