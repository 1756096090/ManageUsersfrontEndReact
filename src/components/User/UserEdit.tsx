// src/components/UserEdit.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { User } from '../../models/User';
import { UserController } from '../../controllers/User';

const UserEdit: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [controller] = useState(new UserController());
    const navigate = useNavigate();  

    useEffect(() => {
        if (id && id !== 'new') {
            controller.getUser(parseInt(id)).then(user => {
                setName(user.Name);
                setEmail(user.Email);
            }).catch(error => {
                console.error("Failed to load user", error);
            });
        }
    }, [id, controller]);

    const handleSave = async () => {
        const user: User = { ID: id !== 'new' ? parseInt(id || '0') : 0, Name: name, Email: email };

        try {
            if (id !== 'new') {
                await controller.editUser(user);
            } else {
                await controller.addUser({ Name: name, Email: email });
            }
            navigate('/users');  
        } catch (error) {
            console.error("Failed to save user", error);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{id === 'new' ? 'Create User' : 'Edit User'}</h1>

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 mr-2"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Age"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 mr-2"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 mr-2"
                />
                <button
                    onClick={handleSave}
                    className="bg-blue-500 text-white p-2"
                >
                    Save
                </button>
            </div>
            <button
                onClick={handleSave}
                style={{ backgroundColor: 'rgb(255, 255, 255)' }}
                className="text-black p-3 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300"
            >
                Return
            </button>
        </div>
    );
};

export default UserEdit;
