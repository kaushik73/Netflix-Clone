// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-oKQ_TOP-QWdg4PDxKvS-zpT-v2S14vg",
  authDomain: "netflixgpt-e7f2f.firebaseapp.com",
  projectId: "netflixgpt-e7f2f",
  storageBucket: "netflixgpt-e7f2f.appspot.com",
  messagingSenderId: "459749169563",
  appId: "1:459749169563:web:ad27c71403c02afd90a93e",
  measurementId: "G-GW9L85N2VG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
