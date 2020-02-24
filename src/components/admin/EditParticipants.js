import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getParticipants } from '../../actions/participants';
import ParticipantItem from './ParticipantItem';

const EditParticipants = ({
  auth: { user, isAuthenticated },
  getParticipants,
  participants: { participants, loading }
}) => {
  useEffect(() => {
    getParticipants();
  }, [getParticipants]);

  if (isAuthenticated && user.role !== 'admin') {
    return <Redirect to="/dashboard" />;
  }

  return loading && participants === null ? (
    <Spinner />
  ) : (
    <div className="edit-participants relative background my-3">
      <div className="banner"></div>
      <div className="content-container">
        <h1>Edit Participants</h1>
        <div className="btn-container">
          <Link to="/add-participant" className="btn btn-primary">
            Add Participant
          </Link>
        </div>
        <div className="participants-list">
          {participants.map(participant => (
            <ParticipantItem key={participant._id} participant={participant} />
          ))}
        </div>
      </div>
    </div>
  );
};

EditParticipants.propTypes = {
  auth: PropTypes.object.isRequired,
  participants: PropTypes.object.isRequired,
  getParticipant: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  participants: state.participants
});

export default connect(mapStateToProps, { getParticipants })(EditParticipants);
