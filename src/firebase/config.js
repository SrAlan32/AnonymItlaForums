import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyD5aKb3gLcpo7853lXAbTMSCHOwjudoWcs",

  authDomain: "muro-1971d.firebaseapp.com",

  projectId: "muro-1971d",

  storageBucket: "muro-1971d.firebasestorage.app",

  messagingSenderId: "14125383520",

  appId: "1:14125383520:web:6841e9b299d3cb2051a805"

};





const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
