import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDnpTc70w6iCqvEVL162MBn5Fvx9n7J9Eo",
  authDomain: "go-prueba-40e43.firebaseapp.com",
  databaseURL: "https://go-prueba-40e43-default-rtdb.firebaseio.com",
  projectId: "go-prueba-40e43",
  storageBucket: "go-prueba-40e43.firebasestorage.app",
  messagingSenderId: "195674271131",
  appId: "1:195674271131:web:0c86fedd4abe14586b053e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);