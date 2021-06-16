import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBQ-a2SDnR8YfUB0z0OJWPFNvhmStjD6gg",
  authDomain: "instagram-clone-20f4a.firebaseapp.com",
  projectId: "instagram-clone-20f4a",
  storageBucket: "instagram-clone-20f4a.appspot.com",
  messagingSenderId: "363978731882",
  appId: "1:363978731882:web:4a6a32e10fdcc91a303513",
  measurementId: "G-PFFX0NZB22",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
