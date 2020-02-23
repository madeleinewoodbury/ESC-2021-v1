import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteCountry } from '../../actions/countries';

const CountryItem = ({ flag, name, id, deleteCountry, history }) => {
  return (
    <div className="country-item">
      <div className="country-info">
        <img src={flag} alt={name} />
        <h2>{name}</h2>
      </div>
      <div className="country-action">
        <button
          onClick={e => deleteCountry(id, history)}
          className="btn btn-danger"
        >
          Delete
        </button>
        <Link to={`/edit-country/${id}`} className="btn btn-secondary">
          Edit
        </Link>
      </div>
    </div>
  );
};

CountryItem.propTypes = {
  deleteCountry: PropTypes.func.isRequired
};

export default connect(null, { deleteCountry })(CountryItem);
