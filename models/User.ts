import { api } from '../config/db';

export interface User {
  email: string;
  password: string;
  name: string;
  createdAt?: Date;
}

export const UserModel = {
  findOne: async (email: string): Promise<User | null> => {
    try {
      const response = await api.get(`/users/${email}`);
      return response;
    } catch (error) {
      console.error('Error finding user:', error);
      return null;
    }
  },

  create: async (userData: User): Promise<User | null> => {
    try {
      const response = await api.post('/users', userData);
      return response;
    } catch (error) {
      console.error('Error creating user:', error);
      return null;
    }
  },

  update: async (email: string, userData: Partial<User>): Promise<User | null> => {
    try {
      const response = await api.put(`/users/${email}`, userData);
      return response;
    } catch (error) {
      console.error('Error updating user:', error);
      return null;
    }
  },

  delete: async (email: string): Promise<boolean> => {
    try {
      await api.delete(`/users/${email}`);
      return true;
    } catch (error) {
      console.error('Error deleting user:', error);
      return false;
    }
  }
}; 