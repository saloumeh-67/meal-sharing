import React from "react";
import { useState, useEffect } from "react";

function Meals() {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/api/meals`)
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
        <h1>{meals.title}</h1>
      ))}
    </div>
  );
}

export default Meals;
