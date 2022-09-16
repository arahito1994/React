import Button from '@mui/material/Button';
import React from 'react';
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";

function SingnIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div>
      1
      <Button onClick={signInWithGoogle}>Googleでログイン</Button>
    </div>
  );
}

export default SingnIn