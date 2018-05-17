import { all, takeLatest, put, call } from 'redux-saga/effects';
import * as types from '../actions/types';
import auth from './auth';
import login from './login';
import articles from './articles';
import redirection from './redirection';
import Api from '../services/api';

/** Initial action on app start */
function* initApp() {
  try {
    yield put({ type: types.AUTH_GET_STATE_REQUEST });
    const result = yield call(Api.getState);
    const data = result.data || {};
    yield put({ type: types.AUTH_GET_STATE_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: types.AUTH_GET_STATE_ERROR });
  }
}

/**
 *  root saga
 */
export default function* root() {
  yield all([
    takeLatest(types.INIT_APP, initApp),
    ...auth(),
    ...login(),
    ...articles(),
    ...redirection(),
  ]);
}
