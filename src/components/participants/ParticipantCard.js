import React from 'react';
import { Link } from 'react-router-dom';

const ParticipantCard = ({ participant }) => {
  const { country, emoji, artist, song, image, _id, countryId } = participant;
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt={artist} />
      </div>
      <div className="card-content">
        <div className="card-pill">
          <Link to={`/countries/${countryId}`}>{`${emoji} ${country}`}</Link>
        </div>
        <div className="card-info">
          <Link to={`/participants/${_id}`}>{artist}</Link>
          <span>
            <em>"{song}"</em>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ParticipantCard;
