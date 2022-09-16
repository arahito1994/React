import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB_lrw-dKHPGrjUKd8QhmtA2SOMgQ8r0Rc",
  authDomain: "line-clone-775de.firebaseapp.com",
  projectId: "line-clone-775de",
  storageBucket: "line-clone-775de.appspot.com",
  messagingSenderId: "205077890124",
  appId: "1:205077890124:web:9623e01e0c7cfcfa1020e9"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
