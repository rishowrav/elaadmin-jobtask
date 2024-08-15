// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRTh2CHbeTG9MBNNdoRLLQvZDut1aQUac",
  authDomain: "elaadmin-3606d.firebaseapp.com",
  projectId: "elaadmin-3606d",
  storageBucket: "elaadmin-3606d.appspot.com",
  messagingSenderId: "672899958305",
  appId: "1:672899958305:web:1ce7f967bcc8abac7f0560",
  measurementId: "G-H68QRG4J93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
