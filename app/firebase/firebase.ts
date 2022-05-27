import {initializeApp} from "firebase/app";
import {getAnalytics, isSupported } from "firebase/analytics";

var firebaseConfig = {
    apiKey: "AIzaSyDkQpA3foSZLSf6OiYn_DXeex11rbmmEGE",
    authDomain: "personal-99d28.firebaseapp.com",
    databaseURL: "https://personal-99d28.firebaseio.com",
    projectId: "personal-99d28",
    storageBucket: "personal-99d28.appspot.com",
    messagingSenderId: "837488094996",
    appId: "1:837488094996:web:049fe45a4e403042685c01",
    measurementId: "G-GSNG7MLZDJ"
}

export const startFirebase = async () => {
    const result = await isSupported()
    if (result) {
        const app = initializeApp(firebaseConfig)
        getAnalytics(app)
    } else {
        console.log(result)
    }
}
