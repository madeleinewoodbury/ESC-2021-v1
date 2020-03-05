import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCountries } from '../../actions/countries';
import CountryItem from './CountryItem';
import './Admin.css';

const EditCountries = ({
  auth: { user, isAuthenticated },
  getCountries,
  countries: { countries, loading },
  history
}) => {
  useEffect(() => {
    getCountries();
  }, [getCountries]);

  if (isAuthenticated && user.role !== 'admin') {
    return <Redirect to="/dashboard" />;
  }

  return loading && countries === null ? (
    <Spinner />
  ) : (
    <div className="admin background">
      <div className="banner"></div>
      <div className="content">
        <div className="overlay">
          <div className="container">
            <h1 className="large">Edit Countries</h1>
            <div className="btn-container">
              <Link to="/add-country" className="btn btn-primary">
                <i className="fas fa-plus-square fa-2x"></i>
              </Link>
            </div>
            <div className="list">
              {countries.map(country => (
                <CountryItem
                  key={country._id}
                  name={country.name}
                  flag={country.flag}
                  id={country._id}
                  history={history}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EditCountries.propTypes = {
  auth: PropTypes.object.isRequired,
  getCountries: PropTypes.func.isRequired,
  countries: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  countries: state.countries
});

export default connect(mapStateToProps, { getCountries })(EditCountries);
