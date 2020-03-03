import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { getCompetitions } from '../../actions/competitions';
import CompetitionCard from './CompetitionCard';
import './Competitions.css';

const Competitions = ({
  getCompetitions,
  competitions: { competitions, loading }
}) => {
  useEffect(() => {
    getCompetitions();
  }, [getCompetitions]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div className="competitions background">
          <div className="banner"></div>
          <div className="content">
            <div className="overlay">
              <div className="container">
                <div className="container">
                  <div className="card-container">
                    {competitions.map(competition => (
                      <CompetitionCard
                        key={competition._id}
                        competition={competition}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

Competitions.propTypes = {
  getCompetitions: PropTypes.func.isRequired,
  competitions: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  competitions: state.competitions
});

export default connect(mapStateToProps, { getCompetitions })(Competitions);
