import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCEx1clsU9pskbjjUobg35JV9MbVrLMu_w",
  authDomain: "itaskdiary.firebaseapp.com",
  databaseURL: "https://itaskdiary-default-rtdb.firebaseio.com",
  projectId: "itaskdiary",
  storageBucket: "itaskdiary.appspot.com",
  messagingSenderId: "101292713098",
  appId: "1:101292713098:web:4eb88c31c1e36dab813973"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)
export {db, storage}