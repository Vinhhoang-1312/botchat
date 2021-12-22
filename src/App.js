import "./App.css";
import React from "react";
import Layout from "./Components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home.js";
import About from "./Components/Pages/About.js";
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
