import React from 'react';
import logo from '../../img/logo.png';
import './navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-wrapper">
      <div className="logo-holder">
        <img src={logo} alt="" />

        <h1>Space Traveler&apos;s Hub</h1>
      </div>
      <ul>
        <li>Rockets</li>
        <li>Missions</li>
        <li className="line" />
        <li>My Profile</li>
      </ul>

    </div>
  </nav>
);

export default Navbar;
