import React from "react";
import "../../styles/About.css";   

function About() {
  return (
    <div
      className="about"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1556909114-a1d34f47412c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,
      }}
    >
      <div className="headerContainer">
        <h1>One Step Closer</h1>
        <p>
          {" "}
          We find the best home cooks around the world so you can immerse
          yourself in meaningful food experiences and cultural traditions passed
          down through generations.
          <br /> Connect with local culture through food.
          <br /> Visit a grandmother in her kitchen in India and learn how to
          make crisp dos's or spend time on a farm in Northern Thailand and
          grind curry pastes, and experience how local people live.
        </p>
      </div>
    </div>
  );
}
export default About;