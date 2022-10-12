// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB93rC6zSYLP5BKMaPGKXts4j6S6Yx9GLE",
  authDomain: "funkoshop-2babd.firebaseapp.com",
  projectId: "funkoshop-2babd",
  storageBucket: "funkoshop-2babd.appspot.com",
  messagingSenderId: "569621610192",
  appId: "1:569621610192:web:b2ee7ee629aa16ba24e8d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;
