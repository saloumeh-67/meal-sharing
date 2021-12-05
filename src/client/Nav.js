import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <h3>logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/meals">
          <li>Meals</li>
        </Link>
        <Link style={navStyle} to="/become a host">
          <li>Become A Host</li>
        </Link>
        <Link style={navStyle} to="/sign up">
          <li>Sign Up</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
