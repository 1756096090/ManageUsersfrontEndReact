import React from 'react';
import { Project } from '../../models/Project';

interface ProjectListViewProps {
    projects: Project[];
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

const ProjectListView: React.FC<ProjectListViewProps> = ({ projects, onEdit, onDelete }) => {
    return (
        <table className="min-w-full border-collapse border border-gray-200">
            <thead>
                <tr>
                    <th className="border border-gray-200 p-2" scope="col">ID</th>
                    <th className="border border-gray-200 p-2" scope="col">Nombre</th>
                    <th className="border border-gray-200 p-2" scope="col">Descripción</th>
                </tr>
            </thead>
            <tbody>
                {projects.map((project) => (
                    <tr key={project.ID}>
                        <td className="border border-gray-200 p-2">{project.ID}</td>
                        <td className="border border-gray-200 p-2">{project.Name}</td>
                        <td className="border border-gray-200 p-2">{project.Description}</td>
                        <td className="border border-gray-200 p-2">
                            <button
                                onClick={() => onEdit(project.ID ?? '')}
                                className="bg-yellow-500 text-white p-1 mr-1 hover:bg-yellow-400"
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => onDelete(project.ID ?? '')}
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

export default ProjectListView;
