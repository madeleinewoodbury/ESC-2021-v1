import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo-white.png';

const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar-behind"></div>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="links-container">
          <ul className="nav-links">
            <li>
              <Link className="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="#">Participants</Link>
            </li>
            <li>
              <Link to="#">Countries</Link>
            </li>
            <li>
              <Link to="#">History</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
          </ul>
          <ul className="nav-links">
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
