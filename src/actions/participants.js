import {
  GET_PARTICIPANT,
  GET_PARTICIPANTS,
  PARTICIPANT_ERROR,
  CLEAR_PARTICIPANT,
  REMOVE_PARTICIPANT,
  GET_VOTE,
  VOTE_ERROR,
  SET_YEAR
} from './types';
import axios from 'axios';
import { setAlert } from './alert';

// Get all participants
export const getParticipants = () => async dispatch => {
  dispatch({
    type: CLEAR_PARTICIPANT
  });
  try {
    const res = await axios.get('/api/participants');
    dispatch({
      type: GET_PARTICIPANTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PARTICIPANT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get participant by id
export const getParticipant = id => async dispatch => {
  try {
    const res = await axios.get(`/api/participants/${id}`);

    dispatch({
      type: GET_PARTICIPANT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PARTICIPANT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add a new participant
export const addParticipant = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.post('/api/participants', formData, config);
    dispatch({
      type: GET_PARTICIPANT,
      payload: res.data
    });
    dispatch(setAlert('Participant Added', 'success'));
    history.push('/edit-participants');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: PARTICIPANT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Update a participant
export const updateParticipant = (id, formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.put(`/api/participants/${id}`, formData, config);

    dispatch({
      type: GET_PARTICIPANT,
      payload: res.data
    });
    dispatch(setAlert('Participant Updated', 'success'));

    // Redirect back to dashboard
    history.push('/edit-participants');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: PARTICIPANT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete participant
export const deleteParticipant = (id, history) => async dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await axios.delete(`/api/participants/${id}`);
      dispatch({
        type: REMOVE_PARTICIPANT
      });
      dispatch(setAlert('Participant deleted', 'success'));
      // Redirect back to dashboard
      history.push('/edit-participants');
    } catch (err) {
      console.log(err);
      dispatch({
        type: PARTICIPANT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};

// Vote on participant
export const voteOnParticipant = (id, vote) => async dispatch => {
  try {
    const res = await axios.post(`/api/participants/vote/${id}/${vote}`);
    dispatch({
      type: GET_VOTE,
      payload: res.data
    });
    dispatch(setAlert('Vote Updated', 'success'));
  } catch (err) {
    dispatch({
      type: VOTE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Set year
export const setShowYear = year => async dispatch => {
  dispatch({
    type: SET_YEAR,
    payload: year
  });
};
