import { call, put, select, takeLatest } from 'redux-saga/effects';
import _get from 'lodash.get';
import * as types from '../actions/types';
import { resetFieldValue } from '../actions/field';
import Api from '../services/api';
import { pathForLoginData } from '../reducers/login';

export function* loginRequest() {
  try {
    yield put({ type: types.LOGIN_REQUEST });
    const { userName, password } = yield select(state => state[pathForLoginData]);
    const result = yield call(Api.login, { userName: userName.value, password: password.value });
    const data = result.data || {};
    yield put({ type: types.LOGIN_SUCCESS, payload: data });
    yield put(resetFieldValue({ path: pathForLoginData, fieldName: 'userName' }));
    yield put(resetFieldValue({ path: pathForLoginData, fieldName: 'password' }));
    yield put({ type: types.GO_TO_ROOT });
  } catch (e) {
    const status = _get(e, 'response.status');
    let errorText = (_get(e, 'response.data.error')) || e.message;
    if (status === 401) {
      errorText = 'Authentication error, please try authenticate again';
    }
    yield put({
      type: types.LOGIN_ERROR,
      payload: {
        error: { text: errorText },
      },
    });
  }
}

export function* resetErrorMessage(action = {}) {
  try {
    if (action.path === pathForLoginData) {
      const { errorText } = yield select(state => state.auth);
      if (errorText) {
        yield put({ type: types.LOGIN_RESET_ERROR_TEXT });
      }
    }
  } catch (e) {}; // eslint-disable-line
}

export default function saga() {
  return [
    takeLatest(types.LOGIN_CLICK, loginRequest),
    takeLatest(types.CHANGE_FIELD_VALUE, resetErrorMessage),
  ];
}
