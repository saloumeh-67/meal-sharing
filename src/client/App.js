import React from "react";
import "./App.css";
import Nav from "./Nav";
import About from "./frontend/component/About";
import Home from "./frontend/component/Home";
import Meals from "./Meals";
import MealsDetail from "./MealsDetail";
import MealsContainer from "./MealsContainer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/meals" exact component={Meals} />
          <Route path="/mealsDetail" exact component={MealsDetail} />
          <Route path="/meals:title" component={MealsDetail} />
          <Route path="/mealsContainer" exact component={MealsContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
