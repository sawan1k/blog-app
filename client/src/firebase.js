// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: "AIzaSyDED5WxmlMRXVYQ5pLR1iqez6d0XnbAXzI",
  authDomain: "blog-app-78d88.firebaseapp.com",
  projectId: "blog-app-78d88",
  storageBucket: "blog-app-78d88.appspot.com",
  messagingSenderId: "292374250568",
  appId: "1:292374250568:web:ec212d6642f589551dc47d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
