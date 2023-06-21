import { initializeApp } from "firebase/app";
// 今回使用する認証とfirestoreをimportする
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCX_OIBS0Dm17dRucJMcHapN1M01PBMCDk",
  authDomain: "reactblogapp-31c0a.firebaseapp.com",
  projectId: "reactblogapp-31c0a",
  storageBucket: "reactblogapp-31c0a.appspot.com",
  messagingSenderId: "970543203668",
  appId: "1:970543203668:web:17e27a852471440fa3b4c1"
};


const app = initializeApp(firebaseConfig);
// 初期化の記述（公式ドキュメント記載）
const auth  = getAuth(app);
const provider = GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };