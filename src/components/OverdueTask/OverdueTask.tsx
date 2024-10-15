import React, { useState } from 'react';
import type { OverdueTaskReport } from '../../models/OverdueTaskReport';
import * as Task from '../../controllers/Task';
import OverDueTaskListView from './OverdueTaskList';

// eslint-disable-next-line @typescript-eslint/no-redeclare
const OverdueTaskReportView: React.FC = () => {
    const [tasks, setTasks] = useState<OverdueTaskReport[]>([]);
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const controller = new Task.TaskController();

    const generateReport = async () => {
        if (!startDate || !endDate) {
            console.error("Please select both start and end dates.");
            return;
        }

        if (new Date(startDate) > new Date(endDate)) {
            console.error("Start date cannot be after end date.");
            return;
        }

        try {
            const data = await controller.getOverdueTaskReport(startDate, endDate);
            setTasks(data);
        } catch (error) {
            console.error("Failed to generate report:", error);
        }
    };



    return (
        <div className="p-6 max-w-10xl mx-auto bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Reporte de Tareas Atrasadas</h1>
            
            <div className="flex justify-between items-center mb-6 space-x-4">
                <input 
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500"
                />
                <input 
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500"
                />

                <button 
                    onClick={generateReport}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow-md focus:outline-none transition ease-in-out duration-300"
                >
                    Generar Reporte
                </button>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                <OverDueTaskListView tasks={tasks} />
            </div>
        </div>
    );
};

export default OverdueTaskReportView;
