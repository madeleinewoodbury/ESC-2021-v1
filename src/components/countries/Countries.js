import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { getCountries } from '../../actions/countries';
import CountryCard from './CountryCard';

const Countries = ({ getCountries, countries: { countries, loading } }) => {
  useEffect(() => {
    getCountries();
  }, [getCountries]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div className="countries relative background">
          <div className="banner"></div>
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
      )}
    </Fragment>
  );
};

Countries.propTypes = {
  getCountries: PropTypes.func.isRequired,
  countries: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  countries: state.countries
});

export default connect(mapStateToProps, { getCountries })(Countries);
