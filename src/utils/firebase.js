// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmZTdERjMOU3YmblElC7QEmq3chNjimOE",
  authDomain: "netflixgpt-e5306.firebaseapp.com",
  projectId: "netflixgpt-e5306",
  storageBucket: "netflixgpt-e5306.appspot.com",
  messagingSenderId: "595279463320",
  appId: "1:595279463320:web:8eb5ceb5ee6007313921ed",
  measurementId: "G-ER9PM9FXPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();