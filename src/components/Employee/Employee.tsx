// src/components/EmployeeCrud.tsx
import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Employee } from '../../models/Employee';
import { EmployeeController } from '../../controllers/Employee';
import EmployeeListView from './EmployeeList'

const EmployeeCrud: React.FC = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [controller] = useState(new EmployeeController());
    const navigate = useNavigate(); 

    const loadEmployees = useCallback(async () => {
        try {
            const data = await controller.getEmployees();
            setEmployees(data);
        } catch (error) {
            console.error("Failed to load employees", error);
        }
    }, [controller]);

    useEffect(() => { 
        loadEmployees();
    }, [loadEmployees]);

    const handleCreate = () => {
        navigate('/employees/edit/new'); 
    };

    const handleEdit = (id: string) => {
        navigate(`/employees/edit/${id}`); 
    };

    const handleDelete = async (id: string) => {
        try {
            await controller.removeEmployee(id);
            await loadEmployees();
        } catch (error) {
            console.error("Failed to delete employee", error);
        }
    };


    return (
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Manejo de empleados</h1>
            
            <div className="flex justify-between items-center mb-6">

                <button 
                    onClick={handleCreate}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow-md focus:outline-none transition ease-in-out duration-300"
                >
                    Crear Empleado
                </button>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                <EmployeeListView employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
            </div>
        </div>
    );
};

export default EmployeeCrud;
