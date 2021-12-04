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
        <Link style={navStyle} to="/About">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/Foods">
          <li>Foods</li>
        </Link>
        <Link style={navStyle} to="/Become A Host">
          <li>Become A Host</li>
        </Link>
        <Link style={navStyle} to="/Sign Up">
          <li>Sign Up</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
