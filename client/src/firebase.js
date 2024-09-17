// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-marketplace-8068c.firebaseapp.com",
  projectId: "estate-marketplace-8068c",
  storageBucket: "estate-marketplace-8068c.appspot.com",
  messagingSenderId: "333277992001",
  appId: "1:333277992001:web:3a9e255f0552c544f362c0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);