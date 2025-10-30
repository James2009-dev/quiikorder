// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "qwiikorder-f5866.firebaseapp.com",
  projectId: "qwiikorder-f5866",
  storageBucket: "qwiikorder-f5866.firebasestorage.app",
  messagingSenderId: "357043076889",
  appId: "1:357043076889:web:99ae2336b2002d59878f88",
  measurementId: "G-GV4HRDLBT8"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const app = getApps().length == 0 ? initializeApp(firebaseConfig): getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};
