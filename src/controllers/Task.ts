import { OverdueTaskReport } from '../models/OverdueTaskReport';
import { Task } from '../models/Task';
import { TaskGet } from '../models/TaskGet';
import {
    fetchTasks,
    createTask,
    updateTask,
    deleteTask,
    fetchTaskById,
    fetchOverdueTaskReport,
} from '../services/Task';

export class TaskController {
    async getTasks(): Promise<TaskGet[]> {
        try {
            return await fetchTasks();
        } catch (error) {
            console.error('Failed to fetch Tasks:', error);
            throw new Error('Could not fetch Tasks.');
        }
    }

    async getTask(id: string): Promise<Task> {
        try {
            return await fetchTaskById(id);
        } catch (error) {
            console.error(`Failed to fetch Task with ID ${id}:`, error);
            throw new Error('Could not fetch Task.');
        }
    }

    async addTask(Task: Omit<Task, 'id'>): Promise<Task> {
        try {
            return await createTask(Task);
        } catch (error) {
            console.error('Failed to create Task:', error);
            throw new Error('Could not create Task.');
        }
    }

    async editTask(Task: Task): Promise<Task> {
        try {
            return await updateTask(Task);
        } catch (error) {
            console.error('Failed to update Task:', error);
            throw new Error('Could not update Task.');
        }
    }

    async removeTask(id: string): Promise<void> {
        try {
            await deleteTask(id);
        } catch (error) {
            console.error(`Failed to delete Task with ID ${id}:`, error);
            throw new Error('Could not delete Task.');
        }
    }

    async getOverdueTaskReport(startDate: string, endDate: string): Promise<OverdueTaskReport[]> {
        try {
            return await fetchOverdueTaskReport(startDate, endDate);
        } catch (error) {
            console.error('Failed to fetch Overdue Task Report:', error);
            throw new Error('Could not fetch Overdue Task Report.');
        }
    }


}
