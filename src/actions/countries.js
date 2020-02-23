import {
  GET_COUNTRY,
  GET_COUNTRIES,
  COUNTRY_ERROR,
  CLEAR_COUNTRY
} from './types';
import axios from 'axios';
import { setAlert } from './alert';

// Get all countries
export const getCountries = () => async dispatch => {
  dispatch({
    type: CLEAR_COUNTRY
  });
  try {
    const res = await axios.get('/api/countries');
    dispatch({
      type: GET_COUNTRIES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COUNTRY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add a new country
export const addCountry = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.post('/api/countries', formData, config);

    dispatch({
      type: GET_COUNTRY,
      payload: res.data
    });
    dispatch(setAlert('Country Added', 'success'));
    history.push('/');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: COUNTRY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
