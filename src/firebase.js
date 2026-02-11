// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6QdY8k96rMbZg9Ao0tCR_I50fzv2YzT4",
    authDomain: "portfolio-714d7.firebaseapp.com",
    projectId: "portfolio-714d7",
    storageBucket: "portfolio-714d7.firebasestorage.app",
    messagingSenderId: "977266235720",
    appId: "1:977266235720:web:224f0d2b466ec502a3bb7d",
    measurementId: "G-2754M22WPW"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
