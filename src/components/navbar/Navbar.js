import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.png';
import './navbar.css';

const Navbar = () => (
  <nav className="navi">
    <div className="navbar-wrapper">
      <div className="logo-holder">
        <img src={logo} alt="" />

        <h1>Space Traveler&apos;s Hub</h1>

      </div>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><p>Home</p></NavLink>
        </li>
        <li>
          <NavLink to="/missions" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><p>Missions</p></NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><p>My profile</p></NavLink>
        </li>
      </ul>

    </div>
  </nav>
);

export default Navbar;
