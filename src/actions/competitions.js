import {
  GET_COMPETITION,
  GET_COMPETITIONS,
  COMPETITION_ERROR,
  CLEAR_COMPETITION,
  REMOVE_COMPETITION
} from './types';
import axios from 'axios';
import { setAlert } from './alert';

// Get all competitions
export const getCompetitions = () => async dispatch => {
  dispatch({
    type: CLEAR_COMPETITION
  });
  try {
    const res = await axios.get('https://esc-2020.online/api/competitions');
    dispatch({
      type: GET_COMPETITIONS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COMPETITION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get competition by id
export const getCompetition = id => async dispatch => {
  try {
    const res = await axios.get(
      `https://esc-2020.online/api/competitions/${id}`
    );
    dispatch({
      type: GET_COMPETITION,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COMPETITION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add a new competition
export const addCompetition = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.post(
      'https://esc-2020.online/api/competitions',
      formData,
      config
    );

    dispatch({
      type: GET_COMPETITION,
      payload: res.data
    });
    dispatch(setAlert('Competition Added', 'success'));
    history.push('/edit-competitions');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: COMPETITION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Update a competition
export const updateCompetition = (id, formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.put(
      `https://esc-2020.online/api/competitions/${id}`,
      formData,
      config
    );

    dispatch({
      type: GET_COMPETITION,
      payload: res.data
    });
    dispatch(setAlert('Competition Updated', 'success'));

    // Redirect back to dashboard
    history.push('/edit-competitions');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: COMPETITION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete competition
export const deleteCompetition = (id, history) => async dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await axios.delete(`https://esc-2020.online/api/competitions/${id}`);

      dispatch({
        type: REMOVE_COMPETITION
      });
      dispatch(setAlert('Competition deleted', 'success'));
      // Redirect back to dashboard
      history.push('/edit-competitions');
    } catch (err) {
      console.log(err);
      dispatch({
        type: COMPETITION_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};
