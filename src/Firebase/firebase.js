import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyC3LqjlslSztqXIyheVlrxrwQBLqZFzgF4",
  authDomain: "playlab-c9b5c.firebaseapp.com",
  databaseURL: "https://playlab-c9b5c-default-rtdb.firebaseio.com",
  projectId: "playlab-c9b5c",
  storageBucket: "playlab-c9b5c.appspot.com",
  messagingSenderId: "889986164491",
  appId: "1:889986164491:web:49cd5b1208e4e1ce68a40e",
  measurementId: "G-G2ZZ531221"
};

const firebaseApp = firebase.initializeApp(config);

// Initialize the Firestore database
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
export default firebaseApp;
