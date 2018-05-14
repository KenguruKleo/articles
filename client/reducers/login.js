import { combineReducers } from 'redux';
import { createFieldReducer } from './factories';
import * as types from '../actions/types';

export const pathForLoginData = 'login';

const valid = (state = false, action = {}) => {
  switch (action.type) {
    case types.LOGIN_FORM_VALIDATION_RESULT:
      return action.valid;
    default:
      return state;
  }
};

export default combineReducers({
  userName: createFieldReducer({
    path: pathForLoginData,
    fieldName: 'userName',
    defaultValue: '',
  }),
  password: createFieldReducer({
    path: pathForLoginData,
    fieldName: 'password',
    defaultValue: '',
  }),
  valid,
});
