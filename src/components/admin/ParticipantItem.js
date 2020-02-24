import React from 'react';
import { Link } from 'react-router-dom';

const ParticipantItem = ({
  participant: { id, flag, artist, song, country }
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
        <button onClick={console.log('delete')} className="btn btn-danger">
          Delete
        </button>
        <Link to={`/edit-participant/${id}`} className="btn btn-secondary">
          Edit
        </Link>
      </div>
    </div>
  );
};

export default ParticipantItem;
