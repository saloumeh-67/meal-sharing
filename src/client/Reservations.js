import React from "react";
import { useState,useEffect } from "react";
import InputSearchMeal from "./InputSearchMeal";

//import "./styles/Reservations.css";

const ReservationsForm = () => {
  const [error, setError] = useState();
  useEffect(() => {
    fetch(`/api/reservations`)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data ");
        }
        return res.json();
      })
      .then((reservations) => {
        console.log(reservations);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <InputSearchMeal />
    </div>
  );
};
export default ReservationsForm;
