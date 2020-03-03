import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import Spinner from '../layout/Spinner';

const DashboardItem = ({
  vote,
  participant: { _id, flag, country, image, artist, song }
}) => {
  return (
    <div className="list-item">
      <div className="item-info">
        <img src={flag} alt={country} />
        <Link to={`/participants/${_id}`}>
          <h2>
            {artist}{' '}
            <span className="hide-sm">
              <em>"{song}"</em>
            </span>
          </h2>
        </Link>
      </div>
      <div className="item-vote">
        <h4>
          {vote} <span>points</span>
        </h4>
      </div>
    </div>
  );
};

// DashboardItem.propTypes = {
//   getParticipant: PropTypes.func.isRequired,
//   participants: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   participants: state.participants
// });

// export default connect(mapStateToProps, { getParticipant })(DashboardItem);

export default DashboardItem;
