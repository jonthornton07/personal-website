import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Blog from './pages/blog/Blog';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/blog" component={Blog} />
    </Router>
  );
}

export default App;
