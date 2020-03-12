import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getParticipant, voteOnParticipant } from '../../actions/participants';
import './Postcard.css';

const ParticipantPostcard = ({
  getParticipant,
  voteOnParticipant,
  participants: { participant, loading },
  auth: { isAuthenticated, user },
  match,
  history
}) => {
  const [formData, setFormData] = useState('');

  useEffect(() => {
    getParticipant(match.params.id, history);
    if (user !== null) {
      const userVote = user.votes.find(
        vote => vote.participant === match.params.id
      );
      if (userVote) {
        setFormData(userVote.vote);
      }
    }
  }, [getParticipant, match.params.id, user, history]);

  const handleSubmit = e => {
    e.preventDefault();
    voteOnParticipant(participant._id, formData);
  };

  return loading || participant === null ? (
    <Spinner />
  ) : (
    <div className="postcard-container">
      <div className="banner"></div>
      <div className="postcard">
        <div className="postcard-top">
          <div className="postcard-hero">
            <div>
              <img
                className="postcard-img"
                src={participant.image}
                alt={participant.artist}
              />
            </div>
            <div>
              <div className="postcard-title">
                <h2>{participant.artist}</h2>
                <img
                  className="postcard-flag"
                  src={participant.flag}
                  alt={participant.country}
                />
              </div>
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
            {isAuthenticated && user && (
              <div className="user-votes">
                <h3>Your Votes</h3>

                <form className="form" onSubmit={e => handleSubmit(e)}>
                  <div className="form-group">
                    <select
                      name="vote"
                      value={formData}
                      onChange={e => setFormData(e.target.value)}
                    >
                      <option value="0">Give your vote</option>
                      <option value="1">1 points</option>
                      <option value="2">2 points</option>
                      <option value="3">3 points</option>
                      <option value="4">4 points</option>
                      <option value="5">5 points</option>
                      <option value="6">6 points</option>
                      <option value="7">7 points</option>
                      <option value="8">8 points</option>
                      <option value="10">10 points</option>
                      <option value="12">12 points</option>
                    </select>
                  </div>
                  <input type="submit" value="Vote" />
                </form>
              </div>
            )}
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
  voteOnParticipant: PropTypes.func.isRequired,
  getParticipant: PropTypes.func.isRequired,
  participants: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  participants: state.participants,
  auth: state.auth
});

export default connect(mapStateToProps, {
  voteOnParticipant,
  getParticipant
})(ParticipantPostcard);
