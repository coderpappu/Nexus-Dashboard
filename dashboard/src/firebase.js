// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMo2lQZq-z2Yo9wW17i5fmiFBEERcy21w",
  authDomain: "nexus-b433a.firebaseapp.com",
  projectId: "nexus-b433a",
  storageBucket: "nexus-b433a.appspot.com",
  messagingSenderId: "462101281594",
  appId: "1:462101281594:web:0500495f5c3cbc40b3ae03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

// register with email and pass
const registerWithEmailPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    alert(user.email);
    return user;
  } catch (error) {
    throw error;
  }
};

// email and pass login
const loginWithEmailAndPassword = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user;
  } catch (error) {
    throw error;
  }
};

// Sign in With Google

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleAuthProvider);
    const user = res.user;
    return user;
  } catch (error) {
    throw error;
  }
};

export {
  signInWithGoogle,
  registerWithEmailPassword,
  loginWithEmailAndPassword,
  auth,
};
