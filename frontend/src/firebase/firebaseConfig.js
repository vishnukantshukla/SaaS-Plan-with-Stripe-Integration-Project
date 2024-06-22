// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyA6tfYCb8WGKs7eHyP6soEwFWkmW7X9__Y",
  authDomain: "saas-plan-with-stripe.firebaseapp.com",
  projectId: "saas-plan-with-stripe",
  storageBucket: "saas-plan-with-stripe.appspot.com",
  messagingSenderId: "263685845712",
  appId: "1:263685845712:web:35152ba68552cd01dde4d5",
};
// const app = initializeApp(firebaseConfig);

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;