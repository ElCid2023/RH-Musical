import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCc6HBM0GTzRdAVhhitHLDo0LrilZ3qHIQ",
  authDomain: "rh-musical.firebaseapp.com",
  projectId: "rh-musical",
  storageBucket: "rh-musical.firebasestorage.app",
  messagingSenderId: "267499387600",
  appId: "1:267499387600:web:2f569346a6fef526d0bcd5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
