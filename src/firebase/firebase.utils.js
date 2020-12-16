import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyB7aU-MznFeO9A4trrc0JOEp6hSU6JleKo",
  authDomain: "absence-mgmt-system-proj.firebaseapp.com",
  projectId: "absence-mgmt-system-proj",
  storageBucket: "absence-mgmt-system-proj.appspot.com",
  messagingSenderId: "745772160896",
  appId: "1:745772160896:web:b81175e5e753d6a50e5365",
  measurementId: "G-ZJYJTTH0ST",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
