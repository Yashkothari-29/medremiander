# MedRemind - Medicine Reminder App

A comprehensive medicine reminder application built with React Native and Expo, featuring AI-powered health assistance using Google's Gemini API.

## Features

- Medicine scheduling and reminders
- AI-powered health assistant using Gemini API
- Secure authentication system
- Medication tracking and history
- Refill reminders
- Calendar view for medication schedule
- Push notifications for reminders

## Tech Stack

- React Native with Expo
- TypeScript
- MongoDB for database
- Google Gemini API for AI assistance
- Expo Router for navigation
- Expo Notifications for reminders

## Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Expo CLI
- MongoDB (local or remote instance)
- Google Gemini API key

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd medicine-reminder-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```
MONGODB_URI=your_mongodb_connection_string
EXPO_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
```

4. Start the development server:
```bash
npm start
```

5. Start the backend server:
```bash
cd backend
npm install
npm start
```

## Project Structure

- `/app` - Main application screens and navigation
- `/components` - Reusable React components
- `/config` - Configuration files
- `/utils` - Utility functions
- `/backend` - Backend server code
- `/models` - Database models
- `/assets` - Images and other static assets

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Google Gemini API for AI capabilities
- Expo team for the amazing framework
- MongoDB for the database solution
