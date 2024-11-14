import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAf6VwJ1I-WYNNYs8Li5WHpkKsKNQCaEuI",
  authDomain: "dashboard-588a8.firebaseapp.com",
  projectId: "dashboard-588a8",
  storageBucket: "dashboard-588a8.firebasestorage.app",
  messagingSenderId: "125801355662",
  appId: "1:125801355662:web:7d5023ae5a6adae0686cdf",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db };
