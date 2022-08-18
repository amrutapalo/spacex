import React from "react";
import "./Overlay.css";

const Overlay = () => {
  return (
    <div className="overlay-wrapper">
      <div className="overlay-menu">
        <ul>
          <li>
            <a href="#">Mission</a>
          </li>
          <li>
            <a href="#">Launches</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Updates</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>

          <li class="mobile-only">
            <a href="falcon9.html">Falcon 9</a>
          </li>
          <li class="mobile-only">
            <a href="falcon-heavy.html">Falcon Heavy</a>ß
          </li>
          <li class="mobile-only">
            <a href="dragon.html">Dragon</a>
          </li>
          <li class="mobile-only">
            <a href="#">Starship</a>
          </li>
          <li class="mobile-only">
            <a href="#">Human Spaceflight</a>
          </li>
          <li class="mobile-only">
            <a href="#">Rideshare</a>
          </li>
          <li class="mobile-only">
            <a href="#">Starlink</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Overlay;
