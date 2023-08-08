// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClV1eK-NbTih-HzNipuK0m_nEqcNhgUFY",
  authDomain: "testing-fiebase.firebaseapp.com",
  projectId: "testing-fiebase",
  storageBucket: "testing-fiebase.appspot.com",
  messagingSenderId: "499670113338",
  appId: "1:499670113338:web:d9a4122207c21a15746903",
  measurementId: "G-H0JYDTHK9N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app)