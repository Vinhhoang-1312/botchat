import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home.js";
import About from "./Components/Pages/About.js";
import Profile from "./Components/Pages/Profile.js";
import Chat from "./Components/Pages/Chat.js";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/chat" exact component={Chat} />
      </Switch>
    </Router>
  );
}

export default App;
