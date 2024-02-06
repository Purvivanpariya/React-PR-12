import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDXkIzDC7ZzlFrWtyXSeQw-k1L9lockIQM",
  authDomain: "pr-11-firestore-firebase.firebaseapp.com",
  projectId: "pr-11-firestore-firebase",
  storageBucket: "pr-11-firestore-firebase.appspot.com",
  messagingSenderId: "564416268917",
  appId: "1:564416268917:web:8428eef2bca975cbb3063c",
  measurementId: "G-0TS2R5Y8WC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)