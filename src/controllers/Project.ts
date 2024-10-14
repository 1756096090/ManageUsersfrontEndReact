import { Project } from '../models/Project';
import {
    fetchProjects,
    createProject,
    updateProject,
    deleteProject,
    fetchProjectById,
} from '../services/Project';

export class ProjectController {
    async getProjects(): Promise<Project[]> {
        try {
            return await fetchProjects();
        } catch (error) {
            console.error('Failed to fetch Projects:', error);
            throw new Error('Could not fetch Projects.');
        }
    }

    async getProject(id: string): Promise<Project> {
        try {
            return await fetchProjectById(id);
        } catch (error) {
            console.error(`Failed to fetch Project with ID ${id}:`, error);
            throw new Error('Could not fetch Project.');
        }
    }

    async addProject(Project: Omit<Project, 'id'>): Promise<Project> {
        try {
            return await createProject(Project);
        } catch (error) {
            console.error('Failed to create Project:', error);
            throw new Error('Could not create Project.');
        }
    }

    async editProject(Project: Project): Promise<Project> {
        try {
            return await updateProject(Project);
        } catch (error) {
            console.error('Failed to update Project:', error);
            throw new Error('Could not update Project.');
        }
    }

    async removeProject(id: string): Promise<void> {
        try {
            await deleteProject(id);
        } catch (error) {
            console.error(`Failed to delete Project with ID ${id}:`, error);
            throw new Error('Could not delete Project.');
        }
    }


}
