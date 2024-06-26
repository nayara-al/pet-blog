import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDi3PZH7glPcB50KgrJzvRPV3TvLxa7ccY",
  authDomain: "pet-blog-4d857.firebaseapp.com",
  projectId: "pet-blog-4d857",
  storageBucket: "pet-blog-4d857.appspot.com",
  messagingSenderId: "140694633116",
  appId: "1:140694633116:web:27741526dee827a3e1cb59",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
