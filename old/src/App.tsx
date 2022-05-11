import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Blog from "./pages/blog/Blog";
import {startFirebase} from "./firebase/LocalFirebase"
import { Pages } from "./pages/pages";

const App = () => {

    useEffect(() => {
        startFirebase();
    }, [])

    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path={`${Pages.Home}`.toLowerCase()} element={<Home />}/>
            <Route path={`${Pages.Work}`.toLowerCase()} element={<Profile />}/>
            <Route path={`${Pages.Blogs}`.toLowerCase()} element={<Blog />}/>
        </Routes>
    )
}

export default App;
