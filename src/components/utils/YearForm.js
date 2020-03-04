import React from 'react';
import './YearForm.css';

const YearForm = ({ year, handleChange }) => {
  return (
    <form className="year-form">
      <div className="form-group">
        <select name="showYear" value={year} onChange={e => handleChange(e)}>
          <option value={2020}>2020</option>
          <option value={2019}>2019</option>
        </select>
      </div>
    </form>
  );
};

export default YearForm;
