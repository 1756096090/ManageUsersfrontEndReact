import React from 'react';
import { OverdueTaskReport } from '../../models/OverdueTaskReport';

interface OverDueTaskListViewProps {
    tasks: OverdueTaskReport[];
}

const OverDueTaskListView: React.FC<OverDueTaskListViewProps> = ({ tasks}) => {
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
                    <th className="border border-gray-200 p-2" scope="col">Días Programados</th>
                    <th className="border border-gray-200 p-2" scope="col">Días Atrasados</th>
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
                        <td className="border border-gray-200 p-2">{task.DurationDays}</td>
                        <td className="border border-gray-200 p-2">{task.OverdueDays}</td>
                    
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default OverDueTaskListView;
