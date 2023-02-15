
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA4RA-l4LQN7SMGxtanoH0sJGhK8RgALPI",
  authDomain: "chat-21c57.firebaseapp.com",
  projectId: "chat-21c57",
  storageBucket: "chat-21c57.appspot.com",
  messagingSenderId: "169775570856",
  appId: "1:169775570856:web:16521d2e85d30f8f4dc79d",
  measurementId: "G-MFZKQKHJQ9"
}
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db =getFirestore();
