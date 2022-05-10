import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import txt from './file.txt';
import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './components/App';
//import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyBfbo2in99lNHz7puxvZoQf5WmYkiGfl9c",
  authDomain: "cc26-solo-vocabcard.firebaseapp.com",
  projectId: "cc26-solo-vocabcard",
  storageBucket: "cc26-solo-vocabcard.appspot.com",
  messagingSenderId: "396234806211",
  appId: "1:396234806211:web:39be50c968f2090e196376",
  measurementId: "G-MDF20RE3F5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
