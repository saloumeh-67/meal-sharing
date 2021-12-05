import React from "react";
import "./App.css";
import Nav from "./Nav";
import About from "./frontend/component/About";
import Home from "./frontend/component/Home";
import Meals from "./Meals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/about" exact>
            <About />
          </Route>

          <Route path="/meals" exact component={Meals} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
