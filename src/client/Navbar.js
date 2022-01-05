import React from "react";
import { useState } from "react";
import "./App.css";
import "./styles/Navbar.css";
//import Logo from "./assets/images/hyf.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import "./styles/Navbar.css";


function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <div className = "logo">
          <RestaurantIcon />
        </div>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/meals"> Meals </Link>
          <Link to="/reservations"> Reservations </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/meals"> Meals </Link>
        <Link to="/reservations"> Reservations </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}


export default Navbar;
