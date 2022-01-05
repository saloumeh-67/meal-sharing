import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

const InputSearchMeal = () => {
  const [value, setValue] = useState("");
  const [titles, setTitles] = useState([]);
  const [meals, setMeals] = useState([]);
  const [contact_name, setContact_name] = useState();
  const [contact_email, setContact_email] = useState();
  const [created_date, setCreated_date] = useState();
  const [number_of_guests, setNumber_of_guests] = useState();
  const [contact_phoneNumber, setContact_phoneNumber] = useState();
  const [reserved, setReserved] = useState(true);
  const [mealId, setMealId] = useState();
  const [toggle, setToggle] = useState(true);
  const available = true;
  const [newReservation, setNewReservation] = useState({
    contact_name: "",
    contact_email: "",
    contact_phoneNumber: "",
    created_date: "",
    number_of_guests: "",
    meal_id: mealId,
  });
    const handleSubmit= async (e) => {
    setNewReservation({...newReservation})
   }
    const postData = () => {
      fetch(`https://hyf-meal-sharing-apps.herokuapp.com/api/reservations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReservation),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
  // console.log(mealId);
  // const newReservation = async (e) => {
  //   try {
  // check if number of reservations is available or not
  // if (availableReservations <resNumber)
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
  const onChangeValue = (e) => {
    const searchValue = e.target.value;
    const filterTitles = meals.filter((meal) => {
      return meal.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    setTitles(filterTitles);
    setValue(searchValue);
    console.log(filterTitles);
  };
  console.log(titles);

  return (
    <>
      <div>
        <input
          className="searchbar"
          style={{
            width: "140px",
            height: "40px",
          }}
          placeholder="search for meal "
          value={value}
          onChange={onChangeValue}
        />
      </div>
      <div>
        {toggle ? (
          titles.map((title) => (
            <h4
              onClick={() => {
                setMealId(title.id);
                setToggle(false);
                setTitles(title);
              }}
            >
              {title.title}
            </h4>
          ))
        ) : (
          <h4>{titles.title}</h4>
        )}
      </div>
      {mealId ? (
        <div className="reservation-form">
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) =>
                setNewReservation({
                  ...newReservation,
                  contact_name: e.target.value,
                })
              }
              placeholder="Enter your name"
              type="text"
              minLength="3"
              required
            />
            <input
              onChange={(e) =>
                setNewReservation({
                  ...newReservation,
                  contact_email: e.target.value,
                })
              }
              placeholder="email address"
              type="text"
              minLength="8"
              required
            />
            <input
              onChange={(e) =>
                setNewReservation({
                  ...newReservation,
                  contact_phoneNumber: e.target.value,
                })
              }
              placeholder="phone number"
              type="text"
              minLength="8"
              required
            />
            <input
              onChange={(e) =>
                setNewReservation({
                  ...newReservation,
                  created_date: e.target.value,
                })
              }
              placeholder="date"
              type="date"
              pattern="\d{4}-\d{2}-\d{2}"
              required
            />
            <input
              onChange={(e) =>
                setNewReservation({
                  ...newReservation,
                  number_of_guests: e.target.value,
                })
              }
              placeholder="number of guests"
              type="text"
              required
            />
            <Link to="./submitReservations">
              <button className="BookTable"> Book a Table</button>
            </Link>
          </form>
        </div>
      ) : null}
    </>
  );
};
export default InputSearchMeal;
