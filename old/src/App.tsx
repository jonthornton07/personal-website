import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Blog from "./pages/blog/Blog";
import {startFirebase} from "./firebase/LocalFirebase"
import { Routes } from "../../app/routes/routes";

const App = () => {

    useEffect(() => {
        startFirebase();
    }, [])

    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path={`${Routes.Home}`.toLowerCase()} element={<Home />}/>
            <Route path={`${Routes.Work}`.toLowerCase()} element={<Profile />}/>
            <Route path={`${Routes.Blogs}`.toLowerCase()} element={<Blog />}/>
        </Routes>
    )
}

export default App;
