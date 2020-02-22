import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import participants from '../../participants';
import CountryCard from './CountryCard';

const Countries = () => {
  const cards = participants.map(item => (
    <CountryCard key={item.id} country={item.country} flag={item.flag} />
  ));
  return (
    <Fragment>
      <div className="countries">
        <div className="banner"></div>
        <div className="card-container">{cards}</div>
      </div>
    </Fragment>
  );
};

export default Countries;
