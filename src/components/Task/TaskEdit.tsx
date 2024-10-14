import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Task } from '../../models/Task';
import { Employee } from '../../models/Employee';
import { Project } from '../../models/Project';
import { TaskController } from '../../controllers/Task';
import { EmployeeController } from '../../controllers/Employee';
import { ProjectController } from '../../controllers/Project';

const TaskEdit: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [name, setName] = useState('');
    const [id_Project, setID_Project] = useState('');
    const [id_Employee, setID_Employee] = useState('');
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    const [description, setDescription] = useState<string>('');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);

    const taskController = new TaskController();
    const employeeController = new EmployeeController();
    const projectController = new ProjectController();
    const navigate = useNavigate();  

    useEffect(() => {
        if (id && id !== 'new') {
            taskController.getTask(id).then(task => {
                setName(task.Name);
                setID_Project(task.ID_Project);
                setID_Employee(task.ID_Employee);
                setDescription(task.Description);
                setIsCompleted(task.IsCompleted);
                setStartDate(formatDateForInput(task.StartDate));
                setEndDate(formatDateForInput(task.EndDate));
            }).catch(error => {
                console.error("Failed to load task", error);
            });
        }

        employeeController.getEmployees().then(setEmployees).catch(error => {
            console.error("Failed to load employees", error);
        });

        projectController.getProjects().then(setProjects).catch(error => {
            console.error("Failed to load projects", error);
        });

    }, [id]);

    const formatDateForInput = (date: Date): string => {
        return date.toISOString().split('T')[0];
    };

    const handleSave = async () => {
        const task: Task = {
            ID: id !== 'new' ? id || '' : '',
            Name: name,
            Description: description,
            ID_Project: id_Project, 
            ID_Employee: id_Employee,
            StartDate: new Date(startDate),
            EndDate: new Date(endDate),
            IsCompleted: isCompleted,
        };

        try {
            if (id !== 'new') {
                await taskController.editTask(task);
            } else {
                await taskController.addTask(task); 
            }
            navigate('/tasks');  
        } catch (error) {
            console.error("Failed to save task", error);
        }
    };

    const handleReturn = () => {
        navigate('/tasks');
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{id === 'new' ? 'Crear Tarea' : 'Editar Tarea'}</h1>

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border p-2 mr-2"
                />
                
                <select
                    value={id_Project}
                    onChange={(e) => setID_Project(e.target.value)}
                    className="border p-2 mr-2"
                >
                    <option value="">Select Project</option>
                    {projects.map(project => (
                        <option key={project.ID} value={project.ID}>
                            {project.Name}
                        </option>
                    ))}
                </select>

                <select
                    value={id_Employee}
                    onChange={(e) => setID_Employee(e.target.value)}
                    className="border p-2 mr-2"
                >
                    <option value="">Select Employee</option>
                    {employees.map(employee => (
                        <option key={employee.ID} value={employee.ID}>
                            {employee.Name}
                        </option>
                    ))}
                </select>

                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="border p-2 mr-2"
                />
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="border p-2 mr-2"
                />
                <label>Se encuentra completa?</label>
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={(e) => setIsCompleted(e.target.checked)}
                    className="ml-2 m-10"
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

export default TaskEdit;