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
        <h2>
          {artist}{' '}
          <span>
            <em>"{song}"</em>
          </span>
        </h2>
      </div>
      <div className="item-action">
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
