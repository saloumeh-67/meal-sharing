import React from "react";
import { useState } from "react";
import InputSearchMeal from "./InputSearchMeal";
import "./styles/Reservations.css";

const ReservationsForm = (props) => {
  const [contact_name, setContact_name] = useState();
  const [contact_email, setContact_email] = useState();
  const [created_date, setCreated_date] = useState();
  const [number_of_guests, setNumber_of_guests] = useState();
  const [contact_phoneNumber, setContact_phoneNumber] = useState();
  const [reserved, setReserved] = useState(true);
  const mealId = props.mealId;
  

  //  const handleSubmit= async (e) => {
  //    setNewReservation({...newReservation,[e.target.name]})
  //  }
  //   try {
  //     const response = await postData(
  //       `https://hyf-meal-sharing-apps.herokuapp.com/api/reservations`,
  //       {
  //         mealId,
  //         number_of_guests,
  //         contact_phoneNumber,
  //         contact_name,
  //         contact_email,
  //         created_date,
  //       }
  //     );
  //     setReserved(response.ok);
  //     return e.preventDefault();
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  return (
    <div>
      {/* <img
        className="reservations-pic"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1615224571870-e863823760fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,
        }}
      /> */}
       <InputSearchMeal />
      
    </div>
  );
};
export default ReservationsForm;
