import React from "react";
import "./App.css";
import Nav from "./Nav";
import About from "./frontend/component/About";
import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
        </Switch>
      </div>
    </Router>
  );
}
const Home = ()=>{
  <div>
    <h1>HomePage</h1>
  </div>
}

export default App;
