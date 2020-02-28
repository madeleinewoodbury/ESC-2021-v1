import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { voteOnParticipant } from '../../actions/auth';

const VoteForm = ({ id, auth: { loading, user }, voteOnParticipant }) => {
  const [formData, setFormData] = useState('');
  useEffect(() => {
    const userVote = user.votes.find(vote => vote.participant === id);
    setFormData(!userVote ? '' : userVote.vote);
  }, [user.votes, id]);

  const handleSubmit = e => {
    e.preventDefault();
    voteOnParticipant(id, formData);
  };

  return (
    !loading && (
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
    )
  );
};

VoteForm.propTypes = {
  voteOnParticipant: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { voteOnParticipant })(VoteForm);
