import { combineReducers } from 'redux';
import { createNamedWrapperReducer } from '../helpers/index';
import * as types from '../../actions/types';

const value = defaultValue => (state, action = {}) => {
  switch (action.type) {
    case types.RESET_FIELD_VALUE:
      return defaultValue;
    case types.CHANGE_FIELD_VALUE:
      return action.value;
    default:
      return state;
  }
};

const visited = (state = false, action = {}) => {
  switch (action.type) {
    case types.RESET_FIELD_VALUE:
      return false;
    case types.FIELD_ON_BLUR:
      return true;
    default:
      return state;
  }
};

const active = (state = false, action = {}) => {
  switch (action.type) {
    case types.FIELD_ON_FOCUS:
      return true;
    case types.FIELD_ON_BLUR:
    case types.RESET_FIELD_VALUE:
      return false;
    default:
      return state;
  }
};

const valid = (state = true, action = {}) => {
  switch (action.type) {
    case types.FIELD_VALIDATION_RESULT:
      return !action.error;
    case types.RESET_FIELD_VALUE:
      return true;
    default:
      return state;
  }
};

const error = (state = '', action = {}) => {
  switch (action.type) {
    case types.FIELD_VALIDATION_RESULT:
      return action.error || '';
    case types.RESET_FIELD_VALUE:
      return '';
    default:
      return state;
  }
};

const createFieldReducer = ({ path = '', fieldName = '', defaultValue = null }) => (
  combineReducers({
    value: createNamedWrapperReducer(value(defaultValue), { path, fieldName, defaultValue }),
    visited: createNamedWrapperReducer(visited, { path, fieldName, defaultValue: false }),
    active: createNamedWrapperReducer(active, { path, fieldName, defaultValue: false }),
    valid: createNamedWrapperReducer(valid, { path, fieldName, defaultValue: true }),
    error: createNamedWrapperReducer(error, { path, fieldName, defaultValue: '' }),
  })
);

export default createFieldReducer;
