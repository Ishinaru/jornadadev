import {getFirestore} from 'firebase/firestore/lite';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAYj5CbaT6z3YzF39mc0pxhISE4qjDUAi8",
  authDomain: "jornadadev-tiktok.firebaseapp.com",
  projectId: "jornadadev-tiktok",
  storageBucket: "jornadadev-tiktok.appspot.com",
  messagingSenderId: "817863151774",
  appId: "1:817863151774:web:83817279c67e5fc9f5eb8f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;