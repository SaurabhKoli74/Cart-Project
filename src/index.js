import React from 'react'; //To write the React Component
import ReactDOM from 'react-dom/client';//To Render Object returned by ReactDOM in index.html 
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_iIrZw-4fud1__60fOOT5tHFjVfLeBfA",
  authDomain: "cart-a3b5f.firebaseapp.com",
  projectId: "cart-a3b5f",
  storageBucket: "cart-a3b5f.appspot.com",
  messagingSenderId: "166417688962",
  appId: "1:166417688962:web:a94e9a0ed0b07a3366479b"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


//to render App component in "index.html"'s element whose id is "root"
// ReactDOM.render(<App/>,document.getElementById('root'));
//above method dont work in new version of react


// Replaces ReactDOM.render(<App />, rootNode) and enables Concurrent Mode.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);


