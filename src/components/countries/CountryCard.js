import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ country, flag, id }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={flag} alt={country} />
      </div>
      <div className="card-content">
        <div className="card-info">
          <Link to={`/countries/${id}`}>{country}</Link>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
