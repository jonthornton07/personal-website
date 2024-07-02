import { initializeApp, type FirebaseOptions } from "firebase/app";
import {
  getAnalytics,
  initializeAnalytics,
  type Analytics,
} from "firebase/analytics";

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

let app = initializeApp(firebaseConfig);
let analytics: Analytics = getAnalytics(app);

export function getFirebaseApp() {
  if (!app && typeof window !== "undefined") {
    app = initializeApp(firebaseConfig);
  }
  return app;
}

export function getFirebaseAnalytics() {
  if (!analytics && typeof window !== "undefined") {
    const app = getFirebaseApp();
    if (app) {
      analytics = getAnalytics(app);
      initializeAnalytics(app, {
        config: {
          cookie_flags: "max-age=7200;secure;samesite=none",
        },
      });
    }
  }
  return analytics;
}
