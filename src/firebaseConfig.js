// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Import getDatabase from firebase

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "https://lovebite-66279-default-rtdb.firebaseio.com", // Your Realtime Database URL
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Initialize Realtime Database

export { database };
