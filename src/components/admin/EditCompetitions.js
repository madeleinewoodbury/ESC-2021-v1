import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCompetitions } from '../../actions/competitions';
import CompetitionItem from './CompetitionItem';
import './Admin.css';

const EditCompetitions = ({
  auth: { user, isAuthenticated },
  getCompetitions,
  competitions: { competitions, loading },
  history
}) => {
  useEffect(() => {
    getCompetitions();
  }, [getCompetitions]);

  if (isAuthenticated && user.role !== 'admin') {
    return <Redirect to="/dashboard" />;
  }

  return loading && competitions === null ? (
    <Spinner />
  ) : (
    <div className="admin background">
      <div className="banner"></div>
      <div className="content">
        <div className="overlay">
          <div className="container">
            <h1 className="large">Edit Competitions</h1>
            <div className="btn-container">
              <Link to="/add-competition" className="btn btn-primary">
                <i className="fas fa-plus-square fa-2x"></i>
              </Link>
            </div>
            <div className="list">
              {competitions.map(competition => (
                <CompetitionItem
                  key={competition._id}
                  logo={competition.logo}
                  host={competition.host}
                  year={competition.year}
                  id={competition._id}
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

EditCompetitions.propTypes = {
  auth: PropTypes.object.isRequired,
  getCompetitions: PropTypes.func.isRequired,
  competitions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  competitions: state.competitions
});

export default connect(mapStateToProps, { getCompetitions })(EditCompetitions);
