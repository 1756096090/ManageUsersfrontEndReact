// src/components/UserEdit.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { User } from '../../models/User';
import { UserController } from '../../controllers/User';

const UserEdit: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState<number | string>('');
    const [password, setPassword] = useState('');

    const controller = new UserController();
    const navigate = useNavigate();  

    useEffect(() => {
        if (id && id !== 'new') {
            controller.getUser(id).then(user => {
                setName(user.Name);
                setEmail(user.Email);
                setAge(user.Age || 0);	
                setPassword(user.Password || '');
            }).catch(error => {
                console.error("Failed to load user", error);
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const handleSave = async () => {
        const user: User = { ID: id !== 'new' ? id || '' : '', Name: name, Email: email, Age: Number(age), Password: password };

        try {
            if (id !== 'new') {
                await controller.editUser(user);
            } else {
                await controller.addUser({ Name: name, Email: email, Age: Number(age), Password: password });
            }
            navigate('/users');  
        } catch (error) {
            console.error("Failed to save user", error);
        }
    };

    const handleReturn = () => {
        navigate('/users');
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{id === 'new' ? 'Crear Usuario' : 'Editar Usuario'}</h1>

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
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="border p-2 mr-2"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                onClick={handleReturn}
                className="text-black p-3 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300"
            >
                Return
            </button>
        </div>
    );
};

export default UserEdit;
