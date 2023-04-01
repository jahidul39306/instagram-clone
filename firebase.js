// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeggFt4vK2moigJLvQ65paxiSVTzKPWeg",
  authDomain: "instagram-clone-e153e.firebaseapp.com",
  projectId: "instagram-clone-e153e",
  storageBucket: "instagram-clone-e153e.appspot.com",
  messagingSenderId: "597181705265",
  appId: "1:597181705265:web:753ee35a336a80ebc47910",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
