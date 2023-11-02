import React from 'react';
import './NavBar.css';
import image1 from '../Assets/logo1.png';

function NavBar() {
  return (
    <div className="topnav">
      <div className="logo">
        <img src={image1} alt="Logo" />
      </div>
      <a href="#news">Contact Us</a>
      <a href="#contact">Service</a>
      <a href="#contact">About</a>
      <a href="#about">Home</a>
    </div>
  );
}

export default NavBar;

