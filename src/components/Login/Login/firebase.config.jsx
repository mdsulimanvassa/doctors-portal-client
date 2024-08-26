import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD72xybYsSwIsm9eiS89_GA1kBHF4oRQvE",
  authDomain: "doctors-portal-a4369.firebaseapp.com",
  projectId: "doctors-portal-a4369",
  storageBucket: "doctors-portal-a4369.appspot.com",
  messagingSenderId: "1010554073939",
  appId: "1:1010554073939:web:a95afdedf7c201598ba7a6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;