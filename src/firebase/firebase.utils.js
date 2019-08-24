import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCrMfjWhJcTWxNIkHSGNxybU6emuVIIddE",
  authDomain: "royals-ecom.firebaseapp.com",
  databaseURL: "https://royals-ecom.firebaseio.com",
  projectId: "royals-ecom",
  storageBucket: "",
  messagingSenderId: "1081467133764",
  appId: "1:1081467133764:web:f4f95a458b1ae490"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
