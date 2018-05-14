import { combineReducers } from 'redux';
import * as types from '../actions/types';

const isPending = (state = false, action = {}) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return true;
    case types.LOGIN_ERROR:
    case types.LOGIN_SUCCESS:
      return false;
    default:
      return state;
  }
};

const loggedIn = (state = false, action = {}) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
    case types.LOGIN_ERROR:
    case types.LOGOUT_CLICK:
      return false;
    case types.LOGIN_SUCCESS:
      return true;
    default:
      return state;
  }
};

const userName = (state = '', action = {}) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
    case types.LOGIN_ERROR:
    case types.LOGOUT_CLICK:
      return '';
    case types.LOGIN_SUCCESS:
      return action.payload.userName;
    default:
      return state;
  }
};

const token = (state = '', action = {}) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
    case types.LOGIN_ERROR:
    case types.LOGOUT_CLICK:
      return '';
    case types.LOGIN_SUCCESS:
      return action.payload.token;
    default:
      return state;
  }
};

const errorText = (state = '', action = {}) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
    case types.LOGIN_SUCCESS:
    case types.LOGIN_RESET_ERROR_TEXT:
      return '';
    case types.LOGIN_ERROR:
      return (action.payload.error || { text: 'Authenticate error' }).text;
    default:
      return state;
  }
};

export default combineReducers({
  isPending,
  loggedIn,
  userName,
  token,
  errorText,
});
