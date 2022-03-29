import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Blog from "./pages/blog/Blog";
import {startFirebase} from "./firebase/LocalFirebase"

const App = () => {

    useEffect(() => {
        startFirebase();
    }, [])

    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/blog" element={<Blog />}/>
        </Routes>
    )
}

export default App;
