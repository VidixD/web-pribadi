// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  /* utama */
  apiKey: "AIzaSyAJ5CaFdOjaBiRUh8u-hpGPNJjFfS225E4",
  authDomain: "xirpl1-f138f.firebaseapp.com",
  projectId: "xirpl1-f138f",
  storageBucket: "xirpl1-f138f.appspot.com",
  messagingSenderId: "559559111447",
  appId: "1:559559111447:web:a06367f90e4de15bad7d52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();