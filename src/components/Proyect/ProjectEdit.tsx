// src/components/ProjectEdit.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Project } from '../../models/Project';
import { ProjectController } from '../../controllers/Project';

const ProjectEdit: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const controller = new ProjectController();
    const navigate = useNavigate();  

    useEffect(() => {
        if (id && id !== 'new') {
            controller.getProject(id).then(proyect => {
                setName(proyect.Name);
                setDescription(proyect.Description);
                

            }).catch(error => {
                console.error("Failed to load proyect", error);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const handleSave = async () => {
        const proyect: Project = {
            ID: id !== 'new' ? id || '' : '',
            Name: name,
            Description: description,
        };

        try {
            if (id !== 'new') {
                await controller.editProject(proyect);
            } else {
                await controller.addProject(proyect); 
            }
            navigate('/projects');  
        } catch (error) {
            console.error("Failed to save proyect", error);
        }
    };

    const handleReturn = () => {
        navigate('/projects');
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
                    placeholder="Descripción"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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

export default ProjectEdit;
