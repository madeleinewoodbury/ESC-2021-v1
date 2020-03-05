import React from 'react';
import { Link } from 'react-router-dom';

const ScoreboardItem = ({
  participant: { _id, emoji, country, countryId, artist, song, points }
}) => {
  return (
    <div className="list-item">
      <div className="item-info">
        <Link to={`/countries/${countryId}`}>
          <h4>
            {emoji} {country}
          </h4>
        </Link>
        <Link to={`/participants/${_id}`}>
          <h4 className="artist hide-xs">
            {artist}{' '}
            <span className="hide-sm">
              <em>"{song}"</em>
            </span>
          </h4>
        </Link>
      </div>
      <div className="item-vote">
        {points ? (
          <h4>
            {points} <span>points</span>
          </h4>
        ) : (
          <h4>TBA</h4>
        )}
      </div>
    </div>
  );
};

export default ScoreboardItem;
