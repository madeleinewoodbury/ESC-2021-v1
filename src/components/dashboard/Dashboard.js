import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardItem from './DashboardItem';
import { loadUser } from '../../actions/auth';
import { getParticipants, getParticipant } from '../../actions/participants';

const Dashboard = ({
  getParticipants,
  loadUser,
  auth: { user, isAuthenticated, loading },
  participants: { participants }
}) => {
  useEffect(() => {
    loadUser();
    getParticipants();
  }, [loadUser, getParticipants]);

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  return loading && user === null ? (
    <Spinner />
  ) : (
    <div className="dashboard background">
      <div className="banner"></div>
      <div className="content">
        <div className="overlay">
          <div className="container">
            <h1 className="large">Welcome {user && user.name}</h1>
            {user && user.role === 'admin' && (
              <div className="btn-container">
                <Link to="/edit-countries" className="btn btn-secondary">
                  Edit Countries
                </Link>
                <Link to="/edit-participants" className="btn btn-secondary">
                  Edit Participants
                </Link>
              </div>
            )}
            <div className="list">
              {user &&
                user.votes.map(vote =>
                  participants.map(participant =>
                    participant._id === vote.participant ? (
                      <DashboardItem
                        key={vote._id}
                        participant={participant}
                        vote={vote.vote}
                      />
                    ) : null
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  loadUser: PropTypes.func.isRequired,
  getParticipants: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  participants: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  participants: state.participants
});

export default connect(mapStateToProps, { loadUser, getParticipants })(
  Dashboard
);
