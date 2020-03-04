import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getParticipants, setShowYear } from '../../actions/participants';
import ParticipantItem from './ParticipantItem';
import YearForm from '../utils/YearForm';
import './Admin.css';

const EditParticipants = ({
  auth: { user, isAuthenticated },
  getParticipants,
  setShowYear,
  participants: { participants, loading, showYear },
  history
}) => {
  useEffect(() => {
    getParticipants();
  }, [getParticipants]);

  if (isAuthenticated && user.role !== 'admin') {
    return <Redirect to="/dashboard" />;
  }

  const handleChange = e => {
    setShowYear(Number(e.target.value));
  };

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
              <YearForm year={showYear} handleChange={handleChange} />
              {participants.map(participant =>
                participant.year == showYear ? (
                  <ParticipantItem
                    key={participant._id}
                    participant={participant}
                    history={history}
                  />
                ) : null
              )}
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
  getParticipant: PropTypes.func.isRequired,
  setShowYear: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  participants: state.participants
});

export default connect(mapStateToProps, { getParticipants, setShowYear })(
  EditParticipants
);
