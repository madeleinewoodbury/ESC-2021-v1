import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteCountry } from '../../actions/countries';

const CountryItem = ({ flag, name, id, deleteCountry, history }) => {
  return (
    <div className="list-item">
      <div className="item-info">
        <img src={flag} alt={name} />
        <Link to={`/countries/${id}`}>
          <h2>{name}</h2>
        </Link>
      </div>
      <div className="item-action">
        <button
          onClick={e => deleteCountry(id, history)}
          className="btn btn-danger"
        >
          <i className="far fa-trash-alt"></i>
          <span className="hide-sm"> Delete</span>
        </button>
        <Link to={`/edit-country/${id}`} className="btn btn-secondary">
          <i className="far fa-edit"></i>
          <span className="hide-sm"> Edit</span>
        </Link>
      </div>
    </div>
  );
};

CountryItem.propTypes = {
  deleteCountry: PropTypes.func.isRequired
};

export default connect(null, { deleteCountry })(CountryItem);
