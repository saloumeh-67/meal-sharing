import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import InputSearchMeal from "./InputSearchMeal";
import SubmitReservations from "./SubmitReservations";
import "./styles/Reservations.css";


const ReservationsForm = (props) => {
  const [contact_name, setContact_name] = useState();
  const [contact_email, setContact_email] = useState();
  const [created_date, setCreated_date] = useState();
  const [number_of_guests, setNumber_of_guests] = useState();
  const [contact_phoneNumber, setContact_phoneNumber] = useState();
  const [reserved, setReserved] = useState(true);
  const mealId = props.mealId;
  //const available = true;
  const newReservation = async (e) => {
    try {
      const response = await postData("/api/reservations", {
        mealId,
        number_of_guests,
        contact_phoneNumber,
        contact_name,
        contact_email,
        created_date,
      });
      setReserved(response.ok);
      return e.preventDefault();
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      {/* <img
        className="reservations-pic"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1615224571870-e863823760fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,
        }}
      /> */}

      <div className="reservation-form">
        <form onSubmit={newReservation}>
          <InputSearchMeal />
          <input
            onChange={(e) => setContact_name(e.target.value)}
            placeholder="Enter your name"
            type="text"
            minLength="3"
            required
          />
          <input
            onChange={(e) => setContact_email(e.target.value)}
            placeholder="email address"
            type="text"
            minLength="8"
            required
          />
          <input
            onChange={(e) => setContact_phoneNumber(e.target.value)}
            placeholder="phone number"
            type="text"
            minLength="8"
            required
          />
          <input
            onChange={(e) => setCreated_date(e.target.value)}
            placeholder="date"
            type="date"
            pattern="\d{4}-\d{2}-\d{2}"
            required
          />
          <input
            onChange={(e) => setNumber_of_guests(e.target.value)}
            placeholder="number of guests"
            type="text"
            required
          />
          <Link to="./submitReservations">
            <button className="BookTable"> Book a Table</button>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default ReservationsForm;
