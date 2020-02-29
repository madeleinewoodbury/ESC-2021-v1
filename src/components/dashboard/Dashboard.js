import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardItem from './DashboardItem';
import { getParticipants, getParticipant } from '../../actions/participants';

const Dashboard = ({
  getParticipants,
  auth: { user, isAuthenticated, loading },
  participants: { participants }
}) => {
  useEffect(() => {
    getParticipants();
  }, [getParticipants]);

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  if (user) {
    const userList = user.votes.map(vote =>
      participants.map(participant => {
        if (participant._id === vote.participant) {
          return (
            <DashboardItem
              key={vote._id}
              participant={participant}
              vote={vote.vote}
            />
          );
        }
      })
    );
    console.log(userList);
  }

  return loading && user === null ? (
    <Spinner />
  ) : (
    <div className="dashboard background">
      <div className="banner"></div>
      <div className="content">
        <div className="overlay">
          <daiv className="container">
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
          </daiv>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  getParticipants: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  participants: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  participants: state.participants
});

export default connect(mapStateToProps, { getParticipants })(Dashboard);
