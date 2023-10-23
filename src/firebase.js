import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore functionality


const firebaseConfig = {
    apiKey: "AIzaSyCH7Lc43C_27EwrXMDljfOnsQE8TasfBn0",
    authDomain: "eeg-website-4a1e3.firebaseapp.com",
    projectId: "eeg-website-4a1e3",
    storageBucket: "eeg-website-4a1e3.appspot.com",
    messagingSenderId: "346061354883",
    appId: "1:346061354883:web:3faf24e5ba7eb92cc2a8b6"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app); // Initialize Firestore


export { auth, db };
