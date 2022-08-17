import React from 'react';
import NavBar from './NavBar';
import './Header.css'
import logo from '../images/logo.png'
import Overlay from './Overlay';


const Header = () => {
  return (
    <div className="header-container">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <NavBar/>
        <div className="hamburger">
          <div className="hamburger-top"></div>
          <div className="hamburger-middle"></div>
          <div className="hamburger-bottom"></div>
        </div>
        <Overlay></Overlay>
    </div>
  )
}

export default Header;