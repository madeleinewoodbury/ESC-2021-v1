import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import countries from './countries';

export default combineReducers({
  auth,
  alert,
  countries
});
