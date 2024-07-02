import { initializeApp, type FirebaseOptions } from "firebase/app";
import { getAnalytics, type Analytics } from "firebase/analytics";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDkQpA3foSZLSf6OiYn_DXeex11rbmmEGE",
  authDomain: "personal-99d28.firebaseapp.com",
  databaseURL: "https://personal-99d28.firebaseio.com",
  projectId: "personal-99d28",
  storageBucket: "personal-99d28.appspot.com",
  messagingSenderId: "837488094996",
  appId: "1:837488094996:web:049fe45a4e403042685c01",
  measurementId: "G-GSNG7MLZDJ",
};

const app = initializeApp(firebaseConfig);
const analytics: Analytics = getAnalytics(app);

export { analytics };
