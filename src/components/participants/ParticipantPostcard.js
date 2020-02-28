import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getParticipant } from '../../actions/participants';
import VoteForm from './VoteForm';

const ParticipantPostcard = ({
  getParticipant,
  participants: { participant, loading },
  auth: { isAuthenticated },
  match
}) => {
  useEffect(() => {
    getParticipant(match.params.id);
  }, [getParticipant, match.params.id]);

  return loading || participant === null ? (
    <Spinner />
  ) : (
    <div className="postcard-container">
      <div className="banner"></div>
      <div className="postcard">
        <div className="postcard-top">
          <div className="postcard-hero">
            <img
              className="postcard-img"
              src={participant.image}
              alt={participant.artist}
            />
            <img
              className="postcard-flag"
              src={participant.flag}
              alt={participant.country}
            />
            <div className="postcard-title">
              <h2>{participant.artist}</h2>
            </div>
          </div>
          <div className="postcard-info">
            <div>
              <h3>Country</h3>
              <Link to={`/countries/${participant.countryId}`}>
                {participant.emoji} {participant.country}
              </Link>
            </div>
            <div>
              <h3>Song</h3>
              <span>{participant.song}</span>
            </div>
            <div>
              <h3>Written by</h3>
              <span>{participant.writtenBy}</span>
            </div>
            <div>
              <h3>Composed by</h3>
              <span>{participant.composedBy}</span>
            </div>
            {isAuthenticated && <VoteForm id={participant._id} />}
          </div>
        </div>

        <div className="postcard-content">
          <div className="postcard-bio">
            <p className="intro">{participant.intro}</p>
            <p>{participant.bio}</p>
          </div>
          {participant.youtube && (
            <div className="postcard-video">
              <iframe
                title={participant.artist}
                src={participant.youtube}
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ParticipantPostcard.propTypes = {
  getParticipant: PropTypes.func.isRequired,
  participants: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  participants: state.participants,
  auth: state.auth
});

export default connect(mapStateToProps, { getParticipant })(
  ParticipantPostcard
);
