import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.png';
import './navbar.css';

const Navbar = () => (
  <nav className="navbar container">
    <div className="navbar-wrapper">
      <div className="logo-holder">
        <img src={logo} alt="" />
        <h1>
          <NavLink to="/">Space Traveler&apos;s Hub</NavLink>
        </h1>
      </div>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/missions" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Missions</NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>My profile</NavLink>
        </li>
      </ul>

    </div>
  </nav>
);

export default Navbar;
