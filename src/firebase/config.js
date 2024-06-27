import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, setDoc, doc, getDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJbuHRqJffod-XQ0CE6MIpS7X7iRyy3vI",
  authDomain: "mobilemend-4cb72.firebaseapp.com",
  projectId: "mobilemend-4cb72",
  storageBucket: "mobilemend-4cb72.appspot.com",
  messagingSenderId: "1002291042977",
  appId: "1:1002291042977:web:a1ce962c3bba7ec9cfaee0",
  measurementId: "G-1KNWTLZKFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider, signInWithPopup, createUserWithEmailAndPassword, doc, setDoc, getDoc };
