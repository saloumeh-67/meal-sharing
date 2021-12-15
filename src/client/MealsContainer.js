import React from "react";
import { useState,useEffect } from "react";

function MealsContainer() {
  const [add, setAdd] = useState([
    {
      title: "",
      description: "",
      location: "",
      when: "",
      max_reservations: "",
      price: "",
      created_date: "",
      images_urls: "",
    },
    {
      title: "Handmade pasta",
      description:
        "Place the flour on a board or in a bowl." <
        br >
        "Make a well in the centre and crack the eggs into it." <
        br >
        "Beat the eggs with a fork until smooth.Using the tips of your fingers, mix the eggs with the flour, incorporating a little at a time, until everything is combined.",
      location: "Online",
      when: "2022-03-01",
      max_reservations: "4",
      price: "300kr",
      created_date: "2021-09-01",
      images_urls:
        "https://images.unsplash.com/photo-1447279506476-3faec8071eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "",
      description: "",
      location: "",
      when: "",
      max_reservations: "",
      price: "",
      created_date: "",
      images_urls: "",
    },
    {
      title: "",
      description: "",
      location: "",
      when: "",
      max_reservations: "",
      price: "",
      created_date: "",
      images_urls: "",
    },
    {
      title: "",
      description: "",
      location: "",
      when: "",
      max_reservations: "",
      price: "",
      created_date: "",
      images_urls: "",
    },
    {
      title: "",
      description: "",
      location: "",
      when: "",
      max_reservations: "",
      price: "",
      created_date: "",
      images_urls: "",
    },
    {
      title: "",
      description: "",
      location: "",
      when: "",
      max_reservations: "",
      price: "",
      created_date: "",
      images_urls: "",
    },
    {
      title: "",
      description: "",
      location: "",
      when: "",
      max_reservations: "",
      price: "",
      created_date: "",
      images_urls: "",
    },
    {
      title: "",
      description: "",
      location: "",
      when: "",
      max_reservations: "",
      price: "",
      created_date: "",
      images_urls: "",
    },
  ]);
  return (
    <div>
      <form>
        <input type="text"name="new meal" display="meal"></input>
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
        <input type="number"></input>
        <input type="text"></input>
        <input type="date"></input>
        <input type="link"></input>
      </form>
    </div>
  );
}

export default MealsContainer;
