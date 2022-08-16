import React from 'react';
import NavBar from './NavBar';
import './Header.css'
import logo from '../images/logo.png'


const Header = () => {
  return (
    <div className="header-container">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <NavBar/>
    </div>
  )
}

export default Header;