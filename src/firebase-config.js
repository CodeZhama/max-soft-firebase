import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//
const firebaseConfig = {
  apiKey: "AIzaSyAKzzjUVcjB5rp_rCddpWMuRK3qNpTXbs4",
  authDomain: "maxsoft-tutorial.firebaseapp.com",
  projectId: "maxsoft-tutorial",
  storageBucket: "maxsoft-tutorial.appspot.com",
  messagingSenderId: "358800926371",
  appId: "1:358800926371:web:1d054547162bd4895e4116",
  measurementId: "G-6TLL7T2RLH",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
