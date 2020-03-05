import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteCompetition } from '../../actions/competitions';

const CompetitionItem = ({
  logo,
  host,
  year,
  id,
  deleteCompetition,
  history
}) => {
  return (
    <div className="list-item">
      <div className="item-info">
        <img src={logo} alt={host} />
        <Link to={`/competitions/${id}`}>
          <h2>
            {host} {year}
          </h2>
        </Link>
      </div>
      <div className="item-action">
        <button
          onClick={e => deleteCompetition(id, history)}
          className="btn btn-danger"
        >
          <i className="far fa-trash-alt"></i>
          <span className="hide-sm"> Delete</span>
        </button>
        <Link to={`/edit-competition/${id}`} className="btn btn-secondary">
          <i className="far fa-edit"></i>
          <span className="hide-sm"> Edit</span>
        </Link>
      </div>
    </div>
  );
};

CompetitionItem.propTypes = {
  deleteCompetition: PropTypes.func.isRequired
};

export default connect(null, { deleteCompetition })(CompetitionItem);
