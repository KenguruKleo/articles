import { put, select, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import { pathForLoginData } from '../reducers/login';

const checkEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
  return re.test(email);
};

export function* validate(values) {
  const { userName } = values;
  const res = { userName: yield checkEmail(userName) ? undefined : 'Invalid email address' };
  return res;
}

export function* validateForm(action = {}) {
  try {
    if (action.path === pathForLoginData) {
      let { userName } = yield select(state => state[pathForLoginData]);
      const { userName: userNameError } = yield validate({ userName: userName.value });
      if (userName.valid !== !userNameError) {
        yield put({
          type: types.FIELD_VALIDATION_RESULT,
          path: pathForLoginData,
          fieldName: 'userName',
          error: userNameError,
        });
      }
      userName = yield select(state => state[pathForLoginData].userName);
      const { valid } = yield select(state => state.login);
      const formValid = userName.valid;
      if (valid !== formValid) {
        yield put({ type: types.LOGIN_FORM_VALIDATION_RESULT, valid: formValid });
      }
    }
  } catch (e) {}; // eslint-disable-line
}

export default function saga() {
  return [
    takeLatest([types.CHANGE_FIELD_VALUE, types.FIELD_ON_BLUR], validateForm),
  ];
}
