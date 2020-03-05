import React, { useEffect } from 'react';
import './YearForm.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCompetitions } from '../../actions/competitions';

const YearForm = ({
  year,
  handleChange,
  competitions: { competitions },
  getCompetitions
}) => {
  useEffect(() => {
    getCompetitions();
  }, [getCompetitions]);
  return (
    <form className="year-form">
      <div className="form-group">
        <select name="showYear" value={year} onChange={e => handleChange(e)}>
          {competitions &&
            competitions.map(comp => (
              <option key={comp._id} value={comp.year}>
                {comp.year}
              </option>
            ))}
        </select>
      </div>
    </form>
  );
};

YearForm.propTypes = {
  getCompetitions: PropTypes.func.isRequired,
  competitions: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  competitions: state.competitions
});

export default connect(mapStateToProps, { getCompetitions })(YearForm);
