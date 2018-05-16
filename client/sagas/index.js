import { all, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import auth from './auth';
import login from './login';
import articles from './articles';
import redirection from './redirection';

/** Initial action on app start */
function* initApp() {
  yield all([]);
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
