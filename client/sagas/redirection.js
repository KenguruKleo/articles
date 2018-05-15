import { takeLatest, put, call } from 'redux-saga/effects';
import history from '../services/history';
import * as types from '../actions/types';

export function* goToPage({ path }) {
  yield call(history.push, path);
}

export function* goToRoot() {
  yield call(history.push, '/');
}

export function* goToLogin() {
  const returnPathAfterSuccess = history.location.pathname;
  yield put({
    type: types.SET_RETURN_PATH_AFTER_AUTH,
    returnPathAfterSuccess,
  });
  yield call(history.push, '/login');
}

export default function saga() {
  return [
    takeLatest(types.GO_TO_PAGE, goToPage),
    takeLatest(types.GO_TO_ROOT, goToRoot),
    takeLatest(types.GO_TO_LOGIN, goToLogin),
  ];
}
