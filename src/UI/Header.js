import React, { useState } from "react";
import NavBar from "./NavBar";
import "./Header.css";
import logo from "../images/logo.png";
import Overlay from "./Overlay";

const Header = (props) => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const onClickHamburger = () => {
    setShowHamburgerMenu(true);
    props.overflow(true);
  };

  const onClickCloseButton = () => {
    setShowHamburgerMenu(false);
    props.overflow(false);
  }

  return (
    <div className="header-container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <NavBar />
      {!showHamburgerMenu && <div className="hamburger" onClick={onClickHamburger}>
        <div className="hamburger-top"></div>
        <div className="hamburger-middle"></div>
        <div className="hamburger-bottom"></div>
      </div>}
      {showHamburgerMenu && <div className="close-button" onClick={onClickCloseButton}>
        <div className="hamburger-top"></div>
        <div className="hamburger-bottom"></div>
      </div>}
      {showHamburgerMenu && <Overlay></Overlay>}
    </div>
  );
};

export default Header;
