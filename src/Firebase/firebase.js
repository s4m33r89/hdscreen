import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDLm72mZjvgiVqIPgrQV2Ka5jUF8rY4bVU",
    authDomain: "smashyhit-156710.firebaseapp.com",
    projectId: "smashyhit-156710",
    storageBucket: "smashyhit-156710.appspot.com",
    messagingSenderId: "186095291886",
    appId: "1:186095291886:web:f8dbe9173ae71ef06352ff",
    measurementId: "G-00KXDBF0GT"
};

const firebaseApp = firebase.initializeApp(config);

// Initialize the Firestore database
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
export default firebaseApp;