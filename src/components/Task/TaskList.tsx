import React from 'react';
import { TaskGet } from '../../models/TaskGet';

interface TaskListViewProps {
    tasks: TaskGet[];
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

const TaskListView: React.FC<TaskListViewProps> = ({ tasks, onEdit, onDelete }) => {
    return (
        <table className="min-w-full border-collapse border border-gray-200">
            <thead>
                <tr>
                    <th className="border border-gray-200 p-2" scope="col">ID</th>
                    <th className="border border-gray-200 p-2" scope="col">Nombre</th>
                    <th className="border border-gray-200 p-2" scope="col">Descripción</th>
                    <th className="border border-gray-200 p-2" scope="col">Empleado Nombre</th>
                    <th className="border border-gray-200 p-2" scope="col">Proyecto Nombre</th>
                    <th className="border border-gray-200 p-2" scope="col">Status</th>
                    <th className="border border-gray-200 p-2" scope="col">Fecha de Inicio</th>
                    <th className="border border-gray-200 p-2" scope="col">Fecha Final</th>
                    <th className="border border-gray-200 p-2" scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <tr key={task.ID}>
                        <td className="border border-gray-200 p-2">{task.ID}</td>
                        <td className="border border-gray-200 p-2">{task.Name}</td>
                        <td className="border border-gray-200 p-2">{task.Description}</td>
                        <td className="border border-gray-200 p-2">{task.EmployeeName}</td>
                        <td className="border border-gray-200 p-2">{task.ProjectName}</td>
                        <td className="border border-gray-200 p-2">{task.IsCompleted ? 'Terminado' : 'En progreso'}</td>
                        <td className="border border-gray-200 p-2">
                            {new Date(task.StartDate).toLocaleDateString('es-ES')} {}
                        </td>
                        <td className="border border-gray-200 p-2">
                            {new Date(task.EndDate).toLocaleDateString('es-ES')} {}
                        </td>
                        <td className="border border-gray-200 p-2">
                            <button
                                onClick={() => onEdit(task.ID ?? '')}
                                className="bg-yellow-500 text-white p-1 mr-1 hover:bg-yellow-400"
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => onDelete(task.ID ?? '')}
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

export default TaskListView;
