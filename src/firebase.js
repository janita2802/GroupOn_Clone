// // src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore"; // For Firestore database

// // const firebaseConfig = {
// //   apiKey: "YOUR_API_KEY",
// //   authDomain: "YOUR_AUTH_DOMAIN",
// //   projectId: "YOUR_PROJECT_ID",
// //   storageBucket: "YOUR_STORAGE_BUCKET",
// //   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
// //   appId: "YOUR_APP_ID"
// // };
// const firebaseConfig = {
//   apiKey: "AIzaSyDUs0hrg5o5TLLKcHK4uEun9t1kjUSP2NE",
//   authDomain: "grouponclone-35f8e.firebaseapp.com",
//   databaseURL: "https://grouponclone-35f8e-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "grouponclone-35f8e",
//   storageBucket: "grouponclone-35f8e.appspot.com",
//   messagingSenderId: "126391811694",
//   appId: "1:126391811694:web:b1311ff4e97b0ad032f07f",
//   measurementId: "G-YVFN8EZ347"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);

// export { auth, db };

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Ensure this import is only here once
import { getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";

// Firebase config and initialization
const firebaseConfig = {
  apiKey: "AIzaSyDUs0hrg5o5TLLKcHK4uEun9t1kjUSP2NE",
  authDomain: "grouponclone-35f8e.firebaseapp.com",
  databaseURL:
    "https://grouponclone-35f8e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "grouponclone-35f8e",
  storageBucket: "grouponclone-35f8e.appspot.com",
  messagingSenderId: "126391811694",
  appId: "1:126391811694:web:b1311ff4e97b0ad032f07f",
  measurementId: "G-YVFN8EZ347",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Initialize Auth once, no need to re-import

// Custom hook for getting the authenticated user
export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return { user };
}

export { auth, db };
