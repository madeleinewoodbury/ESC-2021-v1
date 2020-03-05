import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardItem from './DashboardItem';
import { loadUser } from '../../actions/auth';
import { getParticipants, setShowYear } from '../../actions/participants';
import YearForm from '../utils/YearForm';
import './Dashboard.css';

const Dashboard = ({
  getParticipants,
  setShowYear,
  loadUser,
  auth: { user, isAuthenticated, loading },
  participants: { participants, showYear }
}) => {
  const [sortDown, toggleSortDown] = useState(true);
  useEffect(() => {
    loadUser();
    getParticipants();
  }, [loadUser, getParticipants]);

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  const handleChange = e => {
    setShowYear(Number(e.target.value));
  };

  const getUserVotes = () => {
    if (sortDown) {
      user.votes.sort((a, b) => (a.vote < b.vote ? 1 : -1));
    } else {
      user.votes.sort((a, b) => (a.vote > b.vote ? 1 : -1));
    }

    let userVotes = user.votes.map(vote =>
      participants.map(participant =>
        // eslint-disable-next-line
        participant.year == showYear && participant._id == vote.participant ? (
          <DashboardItem
            key={vote._id}
            participant={participant}
            vote={vote.vote}
          />
        ) : null
      )
    );
    return userVotes;
  };

  return loading && user === null ? (
    <Spinner />
  ) : (
    <div className="dashboard background">
      <div className="banner"></div>
      <div className="content">
        <div className="overlay">
          <div className="container">
            <h1 className="large">Welcome {user && user.name.split(' ')[0]}</h1>
            {user && user.role === 'admin' && (
              <div className="btn-container">
                <Link to="/edit-countries" className="btn btn-secondary">
                  Edit Countries
                </Link>
                <Link to="/edit-participants" className="btn btn-secondary">
                  Edit Participants
                </Link>
                <Link to="/edit-competitions" className="btn btn-secondary">
                  Edit Competitions
                </Link>
              </div>
            )}

            {user && user.votes.length === 0 ? (
              <div className="no-votes">
                <p className="lead">
                  You have not voted on any participants yet...
                </p>
                <Link to="/participants" className="btn btn-primary">
                  View Participants
                </Link>
              </div>
            ) : (
              <div className="list">
                <div className="list-item">
                  <div className="item-title">
                    <h2>Participants</h2>
                    <YearForm year={showYear} handleChange={handleChange} />
                  </div>
                  <div className="item-vote">
                    <button
                      onClick={e => toggleSortDown(!sortDown)}
                      className="btn btn-primary"
                    >
                      {sortDown ? (
                        <span>
                          <span className="hide-xs">Sort</span>{' '}
                          <i className="fas fa-arrow-up"></i>
                        </span>
                      ) : (
                        <span>
                          <span className="hide-xs">Sort</span>{' '}
                          <i className="fas fa-arrow-down"></i>
                        </span>
                      )}
                    </button>
                  </div>
                </div>
                {user && getUserVotes()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  loadUser: PropTypes.func.isRequired,
  getParticipants: PropTypes.func.isRequired,
  setShowYear: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  participants: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  participants: state.participants
});

export default connect(mapStateToProps, {
  loadUser,
  getParticipants,
  setShowYear
})(Dashboard);
