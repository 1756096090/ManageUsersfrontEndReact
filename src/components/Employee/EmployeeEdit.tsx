// src/components/EmployeeEdit.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Employee } from '../../models/Employee';
import { EmployeeController } from '../../controllers/Employee';

const EmployeeEdit: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState<string>(''); // Mantenerlo como cadena
    const [password, setPassword] = useState('');

    const controller = new EmployeeController();
    const navigate = useNavigate();  

    useEffect(() => {
        if (id && id !== 'new') {
            controller.getEmployee(id).then(user => {
                setName(user.Name);
                setEmail(user.Email);
                
                const date = new Date(user.DateOfBirth);
                const formattedDate = 
                    `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
                setDateOfBirth(formattedDate);
                
                setPassword(user.Password || '');
            }).catch(error => {
                console.error("Failed to load user", error);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const handleSave = async () => {
        const [day, month, year] = dateOfBirth.split('/').map(Number);
        const birthDate = new Date(year, month - 1, day); // Mes es cero-indexado

        const user: Employee = {
            ID: id !== 'new' ? id || '' : '',
            Name: name,
            Email: email,
            DateOfBirth: birthDate, // Almacenar como objeto Date
            Password: password,
        };

        try {
            if (id !== 'new') {
                await controller.editEmployee(user);
            } else {
                await controller.addEmployee(user); // Cambiar para usar el objeto user completo
            }
            navigate('/employees');  
        } catch (error) {
            console.error("Failed to save user", error);
        }
    };

    const handleReturn = () => {
        navigate('/employees');
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
                    type="text" 
                    placeholder="Fecha de nacimiento (DD/MM/YYYY)"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
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

export default EmployeeEdit;
