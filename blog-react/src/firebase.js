
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider }from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCR7Vow6QnTvrULr6stytGdUQ6IDY_86Rk",
  authDomain: "blog-7c70a.firebaseapp.com",
  projectId: "blog-7c70a",
  storageBucket: "blog-7c70a.appspot.com",
  messagingSenderId: "1097033925495",
  appId: "1:1097033925495:web:d56b376d5c1acb27fc1772"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider  = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
