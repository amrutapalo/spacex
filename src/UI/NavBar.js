import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul>
          <li>
            <a href="falcon9.html">Falcon 9</a>
          </li>
          <li>
            <a href="falcon-heavy.html">Falcon Heavy</a>
          </li>
          <li>
            <a href="dragon.html">Dragon</a>
          </li>
          <li>
            <a href="#">Starship</a>
          </li>
          <li>
            <a href="#">Human Spaceflight</a>
          </li>
          <li>
            <a href="#">Rideshare</a>
          </li>
          <li>
            <a href="#">Starlink</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
