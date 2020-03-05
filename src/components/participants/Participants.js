import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { getParticipants, setShowYear } from '../../actions/participants';
import ParticipantCard from './ParticipantCard';
import YearForm from '../utils/YearForm';
import './Participants.css';

const Participants = ({
  getParticipants,
  setShowYear,
  participants: { participants, loading, showYear }
}) => {
  const [show, setShow] = useState(1);
  const activeClass = 'btn btn-light active';
  const classes = 'btn btn-light';

  useEffect(() => {
    getParticipants();
  }, [getParticipants]);

  const handleChange = e => {
    setShowYear(Number(e.target.value));
  };

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="participants background">
        <div className="banner"></div>
        <div className="content">
          <div className="overlay">
            <div className="container">
              <YearForm year={showYear} handleChange={handleChange} />
              <div className="btn-container">
                <button
                  onClick={e => setShow(1)}
                  className={show === 1 ? activeClass : classes}
                >
                  All Participants
                </button>
                <button
                  onClick={e => setShow(2)}
                  className={show === 2 ? activeClass : classes}
                >
                  First Semifinal
                </button>
                <button
                  onClick={e => setShow(3)}
                  className={show === 3 ? activeClass : classes}
                >
                  Second Semifinal
                </button>
                <button
                  onClick={e => setShow(4)}
                  className={show === 4 ? activeClass : classes}
                >
                  Final
                </button>
              </div>
              <div className="card-container">
                {show === 1 &&
                  participants.map(participant =>
                    // eslint-disable-next-line
                    participant.year == showYear ? (
                      <ParticipantCard
                        key={participant._id}
                        participant={participant}
                      />
                    ) : null
                  )}
                {show === 2 &&
                  participants.map(participant => {
                    if (
                      participant.semifinal === 'First Semifinal' &&
                      // eslint-disable-next-line
                      participant.year == showYear
                    ) {
                      return (
                        <ParticipantCard
                          key={participant._id}
                          participant={participant}
                        />
                      );
                    } else {
                      return null;
                    }
                  })}
                {show === 3 &&
                  participants.map(participant => {
                    if (
                      participant.semifinal === 'Second Semifinal' &&
                      // eslint-disable-next-line
                      participant.year == showYear
                    ) {
                      return (
                        <ParticipantCard
                          key={participant._id}
                          participant={participant}
                        />
                      );
                    } else {
                      return null;
                    }
                  })}
                {show === 4 &&
                  participants.map(participant => {
                    // eslint-disable-next-line
                    if (participant.final && participant.year == showYear) {
                      return (
                        <ParticipantCard
                          key={participant._id}
                          participant={participant}
                        />
                      );
                    } else {
                      return null;
                    }
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Participants.propTypes = {
  getParticipants: PropTypes.func.isRequired,
  setShowYear: PropTypes.func.isRequired,
  participants: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  participants: state.participants
});

export default connect(mapStateToProps, { getParticipants, setShowYear })(
  Participants
);
