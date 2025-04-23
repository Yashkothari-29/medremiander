import { GoogleGenerativeAI } from '@google/generative-ai';
import Constants from 'expo-constants';

// Get the API key from Expo constants
const GEMINI_API_KEY = Constants.expoConfig?.extra?.geminiApiKey || process.env.EXPO_PUBLIC_GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.warn('No Gemini API key found. Please set EXPO_PUBLIC_GEMINI_API_KEY in your environment or app.config.js');
}

// Initialize the Gemini API with your API key
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY || 'dummy-key');

// Create a model instance with health-specific context
export const geminiModel = genAI.getGenerativeModel({
  model: 'gemini-pro',
  generationConfig: {
    temperature: 0.7,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  },
});

// Helper function to generate health-related responses
export async function generateHealthResponse(prompt: string) {
  if (!GEMINI_API_KEY) {
    return 'API key not configured. Please set up your Gemini API key.';
  }

  try {
    // Add a health context to the prompt
    const healthPrompt = `As a medical and health assistant, please provide accurate and helpful information about: ${prompt}. Only answer questions related to health, medicine, and wellness. If the question is not related to health or medicine, politely decline to answer and suggest asking about health-related topics instead.`;
    
    const result = await geminiModel.generateContent(healthPrompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating response:', error);
    return 'I apologize, but I am currently unable to process your request. Please try again later.';
  }
} 