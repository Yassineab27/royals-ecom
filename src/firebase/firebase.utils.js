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

export const createUserDoc = async (userAuth, additionalData) => {
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const userDocument = await userRef.get();

  if (!userDocument.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("error when creating a user: ", err.message);
    }
  }

  return userRef;
};

export default firebase;
