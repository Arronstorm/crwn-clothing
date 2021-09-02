import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDFWpOMiDxFShixf2vrOzhRxzNHEeS23tQ",
  authDomain: "crwn-clothing-101.firebaseapp.com",
  projectId: "crwn-clothing-101",
  storageBucket: "crwn-clothing-101.appspot.com",
  messagingSenderId: "84492438116",
  appId: "1:84492438116:web:48d94344acfba4baee6d71",
  measurementId: "G-VBHE6XJ7QZ",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(firebase.doc("users/128cshds"));
  ````;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
