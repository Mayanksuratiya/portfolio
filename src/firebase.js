// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCq21i_Wq92o1smSfTGbnWrBeZn6anWbSA",
    authDomain: "portfolio-49124.firebaseapp.com",
    projectId: "portfolio-49124",
    storageBucket: "portfolio-49124.firebasestorage.app",
    messagingSenderId: "384371128",
    appId: "1:384371128:web:dffd0cbf43386d0e2e674d",
    measurementId: "G-1BP2XXYE34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
