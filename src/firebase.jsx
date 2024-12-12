import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhhU3VP_FMh8P9rZPK0HZMFjG1aZDjpXU",
  authDomain: "social-feed-78d34.firebaseapp.com",
  projectId: "social-feed-78d34",
  storageBucket: "social-feed-78d34.firebasestorage.app",
  messagingSenderId: "850495341535",
  appId: "1:850495341535:web:ab3b271c3f2c2f03113a6a",
  measurementId: "G-L59ETCB38W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
