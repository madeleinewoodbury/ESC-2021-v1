import {
  GET_COUNTRY,
  GET_COUNTRIES,
  COUNTRY_ERROR,
  CLEAR_COUNTRY,
  REMOVE_COUNTRY
} from './types';
import axios from 'axios';
import { setAlert } from './alert';

// Get all countries
export const getCountries = () => async dispatch => {
  dispatch({
    type: CLEAR_COUNTRY
  });
  try {
    const res = await axios.get('https://esc-2020.online/api/countries');
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

// Get country by name
export const getCountry = (id, history) => async dispatch => {
  try {
    const res = await axios.get(`https://esc-2020.online/api/countries/${id}`);
    dispatch({
      type: GET_COUNTRY,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COUNTRY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
    history.push('/not-found');
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
    const res = await axios.post(
      'https://esc-2020.online/api/countries',
      formData,
      config
    );

    dispatch({
      type: GET_COUNTRY,
      payload: res.data
    });
    dispatch(setAlert('Country Added', 'success'));
    history.push('/edit-countries');
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

// Update a country
export const updateCountry = (id, formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.put(
      `https://esc-2020.online/api/countries/${id}`,
      formData,
      config
    );

    dispatch({
      type: GET_COUNTRY,
      payload: res.data
    });
    dispatch(setAlert('Country Updated', 'success'));

    // Redirect back to dashboard
    history.push('/edit-countries');
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

// Delete country
export const deleteCountry = (id, history) => async dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await axios.delete(`https://esc-2020.online/api/countries/${id}`);

      dispatch({
        type: REMOVE_COUNTRY
      });
      dispatch(setAlert('Country deleted', 'success'));
      // Redirect back to dashboard
      history.push('/edit-countries');
    } catch (err) {
      console.log(err);
      dispatch({
        type: COUNTRY_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};
