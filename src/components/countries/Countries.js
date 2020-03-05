import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { getCountries } from '../../actions/countries';
import CountryCard from './CountryCard';
import './Countries.css';

const Countries = ({ getCountries, countries: { countries, loading } }) => {
  useEffect(() => {
    getCountries();
  }, [getCountries]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div className="countries background">
          <div className="banner"></div>
          <div className="content">
            <div className="overlay">
              <div className="container">
                <div className="container">
                  <div className="card-container">
                    {countries.map(country => (
                      <CountryCard
                        key={country._id}
                        country={country.name}
                        flag={country.flag}
                        id={country._id}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

Countries.propTypes = {
  getCountries: PropTypes.func.isRequired,
  countries: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  countries: state.countries
});

export default connect(mapStateToProps, { getCountries })(Countries);
