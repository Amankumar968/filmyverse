// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore,collection} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUn9aDLQfkdtpPMD0iM-MfPxuh4Q8TnX0",
  authDomain: "filmyverse-a1da8.firebaseapp.com",
  projectId: "filmyverse-a1da8",
  storageBucket: "filmyverse-a1da8.appspot.com",
  messagingSenderId: "1060375458990",
  appId: "1:1060375458990:web:d4b106abccd93ffd74293f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const moviesRef=collection(db,"movies");

export default app;