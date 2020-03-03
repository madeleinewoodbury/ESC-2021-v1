import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import countries from './countries';
import participants from './participants';
import competitions from './competitions';

export default combineReducers({
  auth,
  alert,
  countries,
  participants,
  competitions
});
