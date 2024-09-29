import { User } from '../models/User';
import {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
  fetchUserById,
} from '../services/User';

export class UserController {
  async getUsers(): Promise<User[]> {
    return await fetchUsers();
  }

  async getUser(id: number): Promise<User> {
    return await fetchUserById(id);
  }

  async addUser(user: Omit<User, 'id'>): Promise<User> {
    return await createUser(user);
  }

  async editUser(user: User): Promise<User> {
    return await updateUser(user);
  }

  async removeUser(id: number): Promise<void> {
    await deleteUser(id);
  }
}
