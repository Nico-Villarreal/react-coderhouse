import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbqB34fgQJSguRNk4Bmpj5dx7lBf6FMfg",
  authDomain: "e-commerce-react-77963.firebaseapp.com",
  projectId: "e-commerce-react-77963",
  storageBucket: "e-commerce-react-77963.appspot.com",
  messagingSenderId: "144220800384",
  appId: "1:144220800384:web:708d8561075f3856acad65",
  measurementId: "G-WVNRVK9WNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);
