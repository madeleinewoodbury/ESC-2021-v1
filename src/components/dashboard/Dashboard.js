import React, { useState, useEffect, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';

const Dashboard = ({ auth: { user, isAuthenticated, loading } }) => {
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }
  return loading && user === null ? (
    <Spinner />
  ) : (
    <div className="dashboard relative background">
      <div className="banner"></div>
      <div className="content-container">
        <h1>Welcome {user && user.name}</h1>
        {user && user.role === 'admin' && (
          <div className="btn-container">
            <Link to="/edit-countries" className="btn btn-dark">
              Edit Countries
            </Link>
            <Link to="#" className="btn btn-dark">
              Edit Participants
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(Dashboard);
