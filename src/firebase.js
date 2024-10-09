// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCZMUdIjxMdZVRy0nETAIwCoZMfT75S_E",
  authDomain: "expensemate-2d36f.firebaseapp.com",
  projectId: "expensemate-2d36f",
  storageBucket: "expensemate-2d36f.appspot.com",
  messagingSenderId: "1023320084719",
  appId: "1:1023320084719:web:247da2707b18c620d6cb1a",
  measurementId: "G-GWQ62KD8KP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
