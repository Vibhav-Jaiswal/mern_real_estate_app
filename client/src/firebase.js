// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-fa27b.firebaseapp.com",
  projectId: "mern-real-estate-fa27b",
  storageBucket: "mern-real-estate-fa27b.appspot.com",
  messagingSenderId: "776032464913",
  appId: "1:776032464913:web:272fe07777ef21275e01b0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);