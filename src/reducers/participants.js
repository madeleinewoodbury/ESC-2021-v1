import {
  GET_PARTICIPANT,
  GET_PARTICIPANTS,
  PARTICIPANT_ERROR,
  CLEAR_PARTICIPANT,
  REMOVE_PARTICIPANT
} from '../actions/types';

const initialState = {
  participants: [],
  participant: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PARTICIPANTS:
      return {
        ...state,
        participants: payload,
        loading: false
      };
    case GET_PARTICIPANT:
      return {
        ...state,
        participant: payload,
        loading: false
      };
    case CLEAR_PARTICIPANT:
    case REMOVE_PARTICIPANT:
      return {
        ...state,
        participants: [],
        participant: null,
        loading: false
      };
    case PARTICIPANT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
