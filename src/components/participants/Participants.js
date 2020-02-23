import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import participants from '../../participants';
import ParticipantCard from './ParticipantCard';

const Participants = () => {
  const cards = participants.map(item => (
    <ParticipantCard
      key={item.id}
      country={item.country}
      emoji={item.emoji}
      artist={item.artist}
      song={item.song}
      image={item.imageUrl}
    />
  ));
  return (
    <Fragment>
      <div className="participants relative background">
        <div className="banner"></div>
        <div className="card-container">{cards}</div>
      </div>
    </Fragment>
  );
};

export default Participants;
