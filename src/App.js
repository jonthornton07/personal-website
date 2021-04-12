import React, {useEffect} from "react";

import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Blog from "./pages/blog/Blog";
import {startFirebase} from "./firebase/LocalFirebase"

function App() {

    useEffect(() => {
        startFirebase();
    }, [])

    return (
        <Router>
            <Route exact path="/" component={Home}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/blog" component={Blog}/>
        </Router>
    );
}

export default App;
