// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBH64ObEZC2Z9sxk7te6vuP8x0ehNTb1M",
  authDomain: "espresso-oasis-83b01.firebaseapp.com",
  databaseURL: "https://espresso-oasis-83b01-default-rtdb.firebaseio.com",
  projectId: "espresso-oasis-83b01",
  storageBucket: "espresso-oasis-83b01.appspot.com",
  messagingSenderId: "309899502586",
  appId: "1:309899502586:web:a970a835ffe92f8a183a43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
