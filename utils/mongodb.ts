import AsyncStorage from '@react-native-async-storage/async-storage';

export const setMongoDBUri = async (uri: string) => {
  try {
    await AsyncStorage.setItem('MONGODB_URI', uri);
    return true;
  } catch (error) {
    console.error('Error setting MongoDB URI:', error);
    return false;
  }
};

export const getMongoDBUri = async () => {
  try {
    const uri = await AsyncStorage.getItem('MONGODB_URI');
    return uri || 'mongodb://localhost:27017/medremind';
  } catch (error) {
    console.error('Error getting MongoDB URI:', error);
    return 'mongodb://localhost:27017/medremind';
  }
}; 