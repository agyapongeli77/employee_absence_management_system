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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const createUserAbsenceRequestDocument = async (
  userAuth,
  additionalData
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (snapShot.exists) {
    try {
      await userRef.update({
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
