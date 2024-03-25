// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSRRmzuL948qNY_Zb8M1XHUFOQa6bQYCc",
  authDomain: "jesters-project-56e6b.firebaseapp.com",
  projectId: "jesters-project-56e6b",
  storageBucket: "jesters-project-56e6b.appspot.com",
  messagingSenderId: "450389821689",
  appId: "1:450389821689:web:12a9c70469ac2173827a28"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp)

export { auth };