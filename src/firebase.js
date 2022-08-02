import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIUWWUsg5fsX7IPWfTUZkgFa-kRp6tu0g",
  authDomain: "react-authentication-7233c.firebaseapp.com",
  projectId: "react-authentication-7233c",
  storageBucket: "react-authentication-7233c.appspot.com",
  messagingSenderId: "185891717704",
  appId: "1:185891717704:web:89ca9073d3633673c40e7d",
  measurementId: "G-68678MJYY1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
