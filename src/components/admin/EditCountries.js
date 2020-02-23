import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';

const EditCountries = ({ auth: { user, isAuthenticated, loading } }) => {
  if (isAuthenticated && user.role !== 'admin') {
    return <Redirect to="/dashboard" />;
  }

  return loading && user === null ? (
    <Spinner />
  ) : (
    <div className="edit-countries relative background">
      <div className="banner"></div>
      <div className="content-container">
        <h1>Edit Countries</h1>
        <div className="btn-container">
          <Link to="/add-country" className="btn btn-primary">
            Add Country
          </Link>
        </div>
        <div className="countries-list">
          <div className="country-item">
            <div className="country-info">
              <img
                src="https://eurovision.tv/image/8d938a00-42af-4b60-835f-415a224a66cd.svg"
                alt="Albania"
              />
              <h2>Albania</h2>
            </div>
            <div className="country-action">
              <Link to="#" className="btn btn-danger">
                Delete
              </Link>
              <Link to="#" className="btn btn-secondary">
                Edit
              </Link>
            </div>
          </div>
          <div className="country-item">
            <div className="country-info">
              <img
                src="https://eurovision.tv/image/8d93896f-fd4c-4afe-bd6e-9caaab1fde55.svg"
                alt="Armenia"
              />
              <h2>Armenia</h2>
            </div>
            <div className="country-action">
              <Link to="#" className="btn btn-danger">
                Delete
              </Link>
              <Link to="#" className="btn btn-secondary">
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EditCountries.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(EditCountries);
