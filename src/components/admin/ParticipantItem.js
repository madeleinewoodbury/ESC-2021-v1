import React from 'react';
import { Link } from 'react-router-dom';
import { deleteParticipant } from '../../actions/participants';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ParticipantItem = ({
  participant: { _id, flag, artist, song, country },
  deleteParticipant,
  history
}) => {
  return (
    <div className="list-item">
      <div className="item-info">
        <img src={flag} alt={country} />
        <Link to={`/participants/${_id}`}>
          <h2>
            {artist}{' '}
            <span className="hide-sm">
              <em>"{song}"</em>
            </span>
          </h2>
        </Link>
      </div>
      <div className="item-action">
        <button
          onClick={e => deleteParticipant(_id, history)}
          className="btn btn-danger"
        >
          <i class="far fa-trash-alt"></i>
          <span className="hide-sm"> Delete</span>
        </button>
        <Link to={`/edit-participant/${_id}`} className="btn btn-secondary">
          <i class="far fa-edit"></i>
          <span className="hide-sm"> Edit</span>
        </Link>
      </div>
    </div>
  );
};

ParticipantItem.propTypes = {
  deleteParticipant: PropTypes.func.isRequired
};

export default connect(null, { deleteParticipant })(ParticipantItem);
