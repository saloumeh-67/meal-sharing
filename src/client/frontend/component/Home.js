import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.css";

function Home() {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80")`,
      }}
    >
      <div className="headerContainer">
        <h1>Authentic Cooking Classes</h1>
        <p>
          {" "}
          Online and in-person cooking classes with locals around the world.
          <br />
          Learn to cook new cuisines and travel from your own kitchen with our
          latest online cooking classes.
        </p>
        <Link to="/meals">
          <button> Find Your Class </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
