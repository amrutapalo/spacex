import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/falcon">Falcon 9</Link>
          </li>
          <li>
            <Link to="/falconHeavy">Falcon Heavy</Link>
          </li>
          <li>
            <Link to="/dragon">Dragon</Link>
          </li>
          <li>
            <Link to="/starship">Starship</Link>
          </li>
          <li>
            <Link to="/humanspaceflight">Human Spaceflight</Link>
          </li>
          <li>
            <Link to="/rideshare">Rideshare</Link>
          </li>
          <li>
            <Link to="/starlink">Starlink</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
