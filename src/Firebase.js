// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA7XSoRjsdnIF4UZ8d3M2pUA9MGJRyO27E",
  authDomain: "react-crud-app-4ce64.firebaseapp.com",
  projectId: "react-crud-app-4ce64",
  storageBucket: "react-crud-app-4ce64.appspot.com",
  messagingSenderId: "1002378125968",
  appId: "1:1002378125968:web:127db4a1d2e4058645ae15",
  measurementId: "G-0667C4SD28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);