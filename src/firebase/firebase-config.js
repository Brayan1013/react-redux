/** @format */
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCS9dTjSBaRrBcl2tr9kbk3jpMPGjUsJrE",
  authDomain: "react-app-c4bc7.firebaseapp.com",
  databaseURL: "https://react-app-c4bc7.firebaseio.com",
  projectId: "react-app-c4bc7",
  storageBucket: "react-app-c4bc7.appspot.com",
  messagingSenderId: "711513938093",
  appId: "1:711513938093:web:502584e012c7dd99ddce24",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleProvider, firebase };
