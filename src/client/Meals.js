import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Meals() {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");


  useEffect(() => {
    fetch(`https://hyf-meal-sharing-apps.herokuapp.com/api/meals`)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data ");
        }
        return res.json();
      })
      .then((meals) => {
        setMeals(meals);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);
  return (
    <div>
      {meals.map((meals) => (
        <div className="foodContainer">
          <h1>
            <Link to={`/meals/${meals.title}`}>{meals.title}</Link>
          </h1>
          <img style={{ maxWidth: "60%" }} src={meals.images_urls}></img>
        </div>
      ))}
    </div>
  );
}

export default Meals;
