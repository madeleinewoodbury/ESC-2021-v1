import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { getCompetition } from '../../actions/competitions';
import PropTypes from 'prop-types';
import './Postcard.css';

const CountryPostcard = ({
  getCompetition,
  competitions: { competition, loading },
  match,
  history
}) => {
  useEffect(() => {
    getCompetition(match.params.id, history);
  }, [getCompetition, match.params.id, history]);

  return (
    <Fragment>
      {competition === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="postcard-container">
            <div className="banner"></div>
            <div className="postcard">
              <div className="postcard-top">
                <div className="postcard-hero">
                  <div>
                    <img
                      className="postcard-img"
                      src={competition.image}
                      alt={competition.host}
                    />
                  </div>
                  <div>
                    <div className="postcard-title">
                      <h2 className="competition-host">
                        {competition.host} {competition.year}
                      </h2>
                      <img
                        className="postcard-logo"
                        src={competition.logo}
                        alt={competition.year}
                      />
                    </div>
                  </div>
                </div>
                <div className="postcard-info">
                  <div>
                    <h3>Country</h3>
                    <Link to={`/countries/${competition.countryId}`}>
                      {competition.emoji} {competition.country}
                    </Link>
                  </div>
                  <div>
                    <h3>Year</h3>
                    <span>{competition.year}</span>
                  </div>
                  <div>
                    <h3>Host</h3>
                    <span>{competition.host}</span>
                  </div>
                  <div>
                    <h3>Winner</h3>
                    <span>{competition.winner}</span>
                  </div>
                  <div className="results">
                    <Link
                      to={`/scoreboard/${competition.year}`}
                      className="btn btn-dark"
                    >
                      View Results
                    </Link>
                  </div>
                </div>
              </div>

              <div className="postcard-content">
                <div className="postcard-bio">
                  <p className="intro">
                    {competition.intro && competition.intro}
                  </p>
                  <p>{competition.bio && competition.bio}</p>
                </div>

                <div className="postcard-video">
                  {competition.youtube && (
                    <iframe
                      title={competition.year}
                      src={competition.youtube}
                      frameBorder="0"
                      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

CountryPostcard.propTypes = {
  getCompetition: PropTypes.func.isRequired,
  competitions: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  competitions: state.competitions,
  auth: state.auth
});

export default connect(mapStateToProps, { getCompetition })(CountryPostcard);
