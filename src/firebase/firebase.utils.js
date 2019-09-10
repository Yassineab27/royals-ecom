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
  const documentSnapshot = await userRef.get();

  if (!documentSnapshot.exists) {
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

// ADD NEW COLLECTIONS TO FIRESTORE
// export const addCollectionAndDoc = async (collectionName, collections) => {
//   const collectionRef = firestore.collection(collectionName);
//   const batch = firestore.batch();

//   collections.forEach(collection => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, collection);
//   });

//   return await batch.commit();
// };

export const shopCollections = snapshot => {
  return snapshot.docs.map(doc => {
    const { title, items, routeName } = doc.data();

    return {
      id: doc.id,
      title,
      routeName,
      items
    };
  });
};

export default firebase;
