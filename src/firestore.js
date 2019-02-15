import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDrZSYiH8D2QTsb146R4SkDlruLdCgLKyI",
  authDomain: "atomic10-cookbook.firebaseapp.com",
  databaseURL: "https://atomic10-cookbook.firebaseio.com",
  projectId: "atomic10-cookbook",
  storageBucket: "atomic10-cookbook.appspot.com",
  messagingSenderId: "675208940007"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
