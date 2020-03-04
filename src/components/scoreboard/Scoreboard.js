import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getParticipantsByYear } from '../../actions/participants';
import ScoreboardItem from './ScoreboardItem';
import Spinner from '../layout/Spinner';
import './Scoreboard.css';

const Scoreboard = ({
  getParticipantsByYear,
  participants: { participants, loading },
  match
}) => {
  const [sortDown, toggleSortDown] = useState(true);

  useEffect(() => {
    getParticipantsByYear(match.params.year);
  }, [getParticipantsByYear, match.params.year]);

  const getResults = () => {
    if (sortDown) {
      participants.sort((a, b) => (a.points < b.points ? 1 : -1));
    } else {
      participants.sort((a, b) => (a.points > b.points ? 1 : -1));
    }

    let results = participants.map(
      participant =>
        participant.final && (
          <ScoreboardItem key={participant._id} participant={participant} />
        )
    );

    return results;
  };

  return loading ? (
    <Spinner />
  ) : (
    <div className="scoreboard background">
      <div className="banner"></div>
      <div className="content">
        <div className="overlay">
          <div className="container">
            <h1 className="large">Scoreboard </h1>
            <div className="list">
              <div className="list-item">
                <div className="item-title">
                  <h2>Grand Final {match.params.year}</h2>
                </div>
                <div className="item-vote">
                  <button
                    onClick={e => toggleSortDown(!sortDown)}
                    className="btn btn-primary"
                  >
                    {sortDown ? (
                      <span>
                        Sort <i className="fas fa-arrow-up"></i>
                      </span>
                    ) : (
                      <span>
                        Sort <i className="fas fa-arrow-down"></i>
                      </span>
                    )}
                  </button>
                </div>
              </div>
              {getResults()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Scoreboard.propTypes = {
  getParticipantsByYear: PropTypes.func.isRequired,
  participants: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  participants: state.participants
});

export default connect(mapStateToProps, { getParticipantsByYear })(Scoreboard);
