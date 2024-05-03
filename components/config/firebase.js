// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, setFireStore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLLs2l7yF_yRiLMuT3xtjEDpVxpW_h4SQ",
  authDomain: "mobile-5d24e.firebaseapp.com",
  projectId: "mobile-5d24e",
  storageBucket: "mobile-5d24e.appspot.com",
  messagingSenderId: "488950661465",
  appId: "1:488950661465:web:5fb26930b8f1a130b98c48",
  measurementId: "G-XNXLVYFRPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()