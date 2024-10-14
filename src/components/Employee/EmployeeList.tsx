import React from 'react';
import { Employee } from '../../models/Employee';

interface EmployeeListViewProps {
    employees: Employee[];
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

const EmployeeListView: React.FC<EmployeeListViewProps> = ({ employees, onEdit, onDelete }) => {
    return (
        <table className="min-w-full border-collapse border border-gray-200">
            <thead>
                <tr>
                    <th className="border border-gray-200 p-2" scope="col">ID</th>
                    <th className="border border-gray-200 p-2" scope="col">Name</th>
                    <th className="border border-gray-200 p-2" scope="col">Email</th>
                    <th className="border border-gray-200 p-2" scope="col">Fecha de cumpleaños</th>
                    <th className="border border-gray-200 p-2" scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.ID}>
                        <td className="border border-gray-200 p-2">{employee.ID}</td>
                        <td className="border border-gray-200 p-2">{employee.Name}</td>
                        <td className="border border-gray-200 p-2">{employee.Email}</td>
                        <td className="border border-gray-200 p-2">
                            {new Date(employee.DateOfBirth).toLocaleDateString('es-ES')} {}
                        </td>
                        <td className="border border-gray-200 p-2">
                            <button
                                onClick={() => onEdit(employee.ID ?? '')}
                                className="bg-yellow-500 text-white p-1 mr-1 hover:bg-yellow-400"
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => onDelete(employee.ID ?? '')}
                                className="bg-red-500 text-white p-1 hover:bg-red-400"
                            >
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EmployeeListView;
