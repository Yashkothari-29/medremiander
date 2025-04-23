import 'dotenv/config';

export default {
  expo: {
    name: "medicine-reminder-app",
    slug: "medicine-reminder-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.yourcompany.medicinereminder"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#FFFFFF"
      },
      package: "com.yourcompany.medicinereminder"
    },
    web: {
      favicon: "./assets/images/favicon.png"
    },
    extra: {
      geminiApiKey: process.env.EXPO_PUBLIC_GEMINI_API_KEY,
      mongodbUri: process.env.MONGODB_URI,
      eas: {
        projectId: "your-project-id"
      }
    },
    plugins: [
      "expo-router"
    ]
  }
}; 