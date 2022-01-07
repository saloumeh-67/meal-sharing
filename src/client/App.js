import React from "react";
import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import About from "./frontend/component/About";
import Home from "./frontend/component/Home";
import Reservations from "./Reservations";
import Meals from "./Meals";
import Contact from "./Contact";
import MealsDetail from "./MealsDetail";
import InputSearchMeal from "./InputSearchMeal";
import AddNewMeals from "./AddNewMeals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/meals" exact component={Meals} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/reservations" exact component={Reservations} />
          <Route path="/inputSearchMeal" exact component={InputSearchMeal} />
          <Route path="/mealsDetail" exact component={MealsDetail} />
          <Route path="/meals:title" component={MealsDetail} />
          <Route path="/addNewMeals" exact component={AddNewMeals} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
