/* padding: 0.4rem 0; */
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo-white.png';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';
import './Navbar.css';
import { VOTE_ERROR } from '../../actions/types';

const Navbar = ({ auth: { user, isAuthenticated, loading }, logout }) => {
  const [viewMenu, toggleViewMenu] = useState(false);

  const handleLogout = e => {
    toggleViewMenu(!viewMenu);
    logout();
  };

  const authLinks = (
    <ul className="nav-links">
      <li>
        |
        <Link
          onClick={e => toggleViewMenu(!viewMenu)}
          to="/dashboard"
          title="Dashboard"
        >
          <i className="fas fa-user"></i>
          <span>{user && user.name.trim().split(' ')[0]}</span>
        </Link>
      </li>
      <li>
        <Link onClick={e => handleLogout(e)} to="#!">
          <i className="fas fa-sign-out-alt"></i>
          <span>Logout</span>
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="nav-links">
      <li>
        <Link onClick={e => toggleViewMenu(!viewMenu)} to="/register">
          Register
        </Link>
      </li>
      <li>
        <Link onClick={e => toggleViewMenu(!viewMenu)} to="/login">
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <Fragment>
      <div className="navbar-behind"></div>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <label className="menu-toggle" htmlFor="toggle">
          &#9776;
        </label>
        <input
          className="menu-checkbox"
          type="checkbox"
          id="toggle"
          checked={viewMenu}
          onChange={e => toggleViewMenu(!viewMenu)}
        />
        <div className="links-container menu">
          <ul className="nav-links">
            <li>
              <Link
                onClick={e => toggleViewMenu(!viewMenu)}
                className="active"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link onClick={e => toggleViewMenu(!viewMenu)} to="/participants">
                Participants
              </Link>
            </li>
            <li>
              <Link onClick={e => toggleViewMenu(!viewMenu)} to="/countries">
                Countries
              </Link>
            </li>
            <li>
              <Link onClick={e => toggleViewMenu(!viewMenu)} to="#">
                Competition
              </Link>
            </li>
            <li>
              <Link onClick={e => toggleViewMenu(!viewMenu)} to="#">
                About
              </Link>
            </li>
          </ul>
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </div>
      </nav>
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
