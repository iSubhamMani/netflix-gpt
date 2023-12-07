// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj5dZ5f45EdY9qtJpO2yMfUVQMkqCG-hY",
  authDomain: "netflix-gpt-10d41.firebaseapp.com",
  projectId: "netflix-gpt-10d41",
  storageBucket: "netflix-gpt-10d41.appspot.com",
  messagingSenderId: "85332444903",
  appId: "1:85332444903:web:8443d7be80b3e343140442",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
