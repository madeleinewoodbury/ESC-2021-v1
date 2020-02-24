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
    <div className="participant-item">
      <div className="participant-info">
        <img src={flag} alt={country} />
        <h2>
          {artist} <em>"{song}"</em>
        </h2>
      </div>
      <div className="participant-action">
        <button
          onClick={e => deleteParticipant(_id, history)}
          className="btn btn-danger"
        >
          Delete
        </button>
        <Link to={`/edit-participant/${_id}`} className="btn btn-secondary">
          Edit
        </Link>
      </div>
    </div>
  );
};

ParticipantItem.propTypes = {
  deleteParticipant: PropTypes.func.isRequired
};

export default connect(null, { deleteParticipant })(ParticipantItem);
