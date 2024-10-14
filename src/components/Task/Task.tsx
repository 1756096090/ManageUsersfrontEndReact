// src/components/TaskCrud.tsx
import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskGet } from '../../models/TaskGet';
import { TaskController } from '../../controllers/Task';
import TaskListView from './TaskList'

const TaskCrud: React.FC = () => {
    const [tasks, setTasks] = useState<TaskGet[]>([]);
    const [controller] = useState(new TaskController());
    const navigate = useNavigate(); 

    const loadTasks = useCallback(async () => {
        try {
            const data = await controller.getTasks();
            setTasks(data);
        } catch (error) {
            console.error("Failed to load tasks", error);
        }
    }, [controller]);

    useEffect(() => { 
        loadTasks();
    }, [loadTasks]);

    const handleCreate = () => {
        navigate('/tasks/edit/new'); 
    };

    const handleEdit = (id: string) => {
        navigate(`/tasks/edit/${id}`); 
    };

    const handleDelete = async (id: string) => {
        try {
            await controller.removeTask(id);
            await loadTasks();
        } catch (error) {
            console.error("Failed to delete task", error);
        }
    };


    return (
        <div className="p-6 max-w-5xl mx-auto bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Manejo de Tareas</h1>
            
            <div className="flex justify-between items-center mb-6">

                <button 
                    onClick={handleCreate}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow-md focus:outline-none transition ease-in-out duration-300"
                >
                    Crear Tarea
                </button>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                <TaskListView tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
            </div>
        </div>
    );
};

export default TaskCrud;
