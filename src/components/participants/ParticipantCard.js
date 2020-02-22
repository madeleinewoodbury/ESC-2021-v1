import React from 'react';
import { Link } from 'react-router-dom';

const ParticipantCard = ({ country, emoji, artist, song, image }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt={artist} />
      </div>
      <div className="card-content">
        <div className="card-pill">
          <Link to="/participants/id">{`${emoji} ${country}`}</Link>
        </div>
        <div className="card-info">
          <Link to="/participants/id">{artist}</Link>
          <span>{song}</span>
        </div>
      </div>
    </div>
  );
};

export default ParticipantCard;
