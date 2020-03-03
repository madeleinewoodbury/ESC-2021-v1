import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Countdown from '../utils/Countdown';

const Landing = () => {
  return (
    <div className="landing background">
      <div className="banner"></div>
      <div className="content">
        <div className="overlay">
          <div className="container">
            <Countdown
              timeTillDate={new Date('May 16, 2020 14:00:00').getTime()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
