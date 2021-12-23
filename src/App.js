import "./App.css";
import React from "react";
import Layout from "./Components/Layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home.js";
import About from "./Components/Pages/About.js";
import Profile from "./Components/Pages/Profile.js";
function App() {
  return (
    <Router>
      <Layout />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
