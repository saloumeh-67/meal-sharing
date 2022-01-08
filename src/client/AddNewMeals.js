import React from "react";
import { useState } from "react";

export const AddNewMeals = () => {
  const [newMeal, setNewMeal] = useState({});
  function handleChange(e) {
    setNewMeal(true);
    setNewMeal({ ...newMeal, [e.target.name]: e.target.value });
    fetch("/api/meals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "",
        description: "",
        location: "",
        when: "",
        max_reservations: "",
        price: "",
        created_date: "",
        images_url: "",
      }),
    })
      .catch((e) => {
        setError(e);
        alert("please enter the Valid details");
      })
      .finally(() => {
        setNewMeal(false);
        alert("Your meal has been saved.");
      })
    };
  return (
    <>
      <h4>  Share your meal with the others  </h4>
      <div className="addMeal-form">
        <form>
          <input
            onChange={(e) => setNewMeal({ ...newMeal, title: e.target.value })}
            placeholder="Enter your food name"
            type="text"
            minLength="3"
            required
          />
          <input
            onChange={(e) =>
              setNewMeal({ ...newMeal, location: e.target.value })
            }
            placeholder="place"
            type="text"
            minLength="3"
            required
          />
          <input
            onChange={(e) =>
              setNewMeal({ ...newMeal, description: e.target.value })
            }
            placeholder="recipe"
            type="text"
            minLength="3"
            required
          />
          <input
            onChange={(e) => setNewMeal({ ...newMeal, when: e.target.value })}
            placeholder="date"
            type="date"
            pattern="\d{4}-\d{2}-\d{2}"
            required
          />
          <input
            onChange={(e) =>
              setNewMeal({
                ...newMeal,
                max_reservations: e.target.value,
              })
            }
            placeholder="number of guests"
            type="text"
            required
          />
          <input
            onChange={(e) =>
              setNewMeal({
                ...newMeal,
                price: e.target.value,
              })
            }
            placeholder="price"
            type="text"
            required
          />
          {/* <input
            onChange={(e) =>
              setNewMeal({
                ...newMeal,
                created_date: e.target.value,
              })
            }
            placeholder="created date"
            type="date"
            pattern="\d{4}-\d{2}-\d{2}"
            required
          /> */}
          <input
            onChange={(e) =>
              setNewMeal({
                ...newMeal,
                images_url: e.target.value,
              })
            }
            placeholder="upload your image"
            type="file"
            name="Food Image"
          />
          <button type= "button" onClick={AddNewMeals} className="add food">
            Add to List{" "}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNewMeals;
