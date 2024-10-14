// src/components/ProjectCrud.tsx
import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Project } from '../../models/Project';
import { ProjectController } from '../../controllers/Project';
import ProjectListView from './ProjectList';

const ProjectCrud: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [controller] = useState(new ProjectController());
    const navigate = useNavigate(); 

    const loadProjects = useCallback(async () => {
        try {
            const data = await controller.getProjects();
            setProjects(data);
        } catch (error) {
            console.error("Failed to load projects", error);
        }
    }, [controller]);

    useEffect(() => { 
        loadProjects();
    }, [loadProjects]);

    const handleCreate = () => {
        navigate('/projects/edit/new'); 
    };

    const handleEdit = (id: string) => {
        navigate(`/projects/edit/${id}`); 
    };

    const handleDelete = async (id: string) => {
        try {
            await controller.removeProject(id);
            await loadProjects();
        } catch (error) {
            console.error("Failed to delete project", error);
        }
    };


    return (
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Manejo de projectos</h1>
            
            <div className="flex justify-between items-center mb-6">

                <button 
                    onClick={handleCreate}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow-md focus:outline-none transition ease-in-out duration-300"
                >
                    Crear Projecto
                </button>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                <ProjectListView projects={projects} onEdit={handleEdit} onDelete={handleDelete} />
            </div>
        </div>
    );
};

export default ProjectCrud;
