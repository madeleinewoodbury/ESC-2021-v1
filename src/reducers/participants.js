import {
  GET_PARTICIPANT,
  GET_PARTICIPANTS,
  PARTICIPANT_ERROR,
  CLEAR_PARTICIPANT,
  REMOVE_PARTICIPANT,
  GET_VOTE,
  VOTE_ERROR,
  SET_YEAR
} from '../actions/types';

const initialState = {
  participants: [],
  participant: null,
  showYear: 2020,
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
    case GET_VOTE:
      return {
        ...state,
        participant: payload,
        loading: false
      };
    case SET_YEAR:
      return {
        ...state,
        showYear: payload
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
    case VOTE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
