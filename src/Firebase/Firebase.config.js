// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACPrNVlYasHRnTWoaAq-WUWUDCnq9t_FQ",
    authDomain: "react-coffee-store.firebaseapp.com",
    projectId: "react-coffee-store",
    storageBucket: "react-coffee-store.appspot.com",
    messagingSenderId: "449509098184",
    appId: "1:449509098184:web:9f02dd0ab8f821cebd9bfd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
