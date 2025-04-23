import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from './api';

let isConnected = false;
let connectionPromise: Promise<void> | null = null;

// Use AsyncStorage to store the MongoDB URI
const getMongoDBUri = async () => {
  try {
    const storedUri = await AsyncStorage.getItem('MONGODB_URI');
    return storedUri || 'mongodb://localhost:27017/medremind';
  } catch (error) {
    console.error('Error getting MongoDB URI:', error);
    return 'mongodb://localhost:27017/medremind';
  }
};

export const connectDB = async () => {
  // If we're already connected, return immediately
  if (isConnected) {
    return;
  }

  // If there's already a connection attempt in progress, return that promise
  if (connectionPromise) {
    return connectionPromise;
  }

  // Create a new connection promise
  connectionPromise = (async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      if (response.ok) {
        console.log('API connected successfully');
        isConnected = true;
      } else {
        throw new Error('API connection failed');
      }
    } catch (error) {
      console.error('API connection error:', error);
      isConnected = false;
      throw error;
    } finally {
      connectionPromise = null;
    }
  })();

  return connectionPromise;
};

export const disconnectDB = async () => {
  try {
    if (!isConnected) {
      return;
    }
    
    isConnected = false;
    console.log('API disconnected successfully');
  } catch (error) {
    console.error('API disconnection error:', error);
    throw error;
  }
};

// Helper function to make API calls
export const api = {
  get: async (endpoint: string) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },
  post: async (endpoint: string, data: any) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },
  put: async (endpoint: string, data: any) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },
  delete: async (endpoint: string) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }
}; 