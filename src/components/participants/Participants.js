import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { getParticipants } from '../../actions/participants';
import ParticipantCard from './ParticipantCard';

const Participants = ({
  getParticipants,
  participants: { participants, loading }
}) => {
  useEffect(() => {
    getParticipants();
  }, [getParticipants]);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="participants background">
        <div className="banner"></div>
        <div className="content">
          <div className="overlay">
            <div className="container">
              <div className="card-container">
                {participants.map(participant => (
                  <ParticipantCard
                    key={participant.id}
                    participant={participant}
                  />
                ))}
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
  participants: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  participants: state.participants
});

export default connect(mapStateToProps, { getParticipants })(Participants);
