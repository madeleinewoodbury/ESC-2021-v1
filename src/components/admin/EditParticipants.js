import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getParticipants } from '../../actions/participants';
import ParticipantItem from './ParticipantItem';
import './Admin.css';

const EditParticipants = ({
  auth: { user, isAuthenticated },
  getParticipants,
  participants: { participants, loading },
  history
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
    <div className="admin background">
      <div className="banner"></div>
      <div className="content">
        <div className="overlay">
          <div className="container">
            <h1 className="large">Edit Participants</h1>
            <div className="btn-container">
              <Link to="/add-participant" className="btn btn-primary">
                <i className="fas fa-plus-square fa-2x"></i>
              </Link>
            </div>

            <div className="list">
              {participants.map(participant => (
                <ParticipantItem
                  key={participant._id}
                  participant={participant}
                  history={history}
                />
              ))}
            </div>
          </div>
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
