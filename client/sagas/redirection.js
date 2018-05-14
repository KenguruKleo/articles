import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as types from '../actions/types';

export function* goToPage({ path }) {
  yield put(push(path));
}

export function* goToRoot() {
  yield put(push('/'));
}

export function* goToLogin() {
  yield put(push('/login'));
}

export default function saga() {
  return [
    takeLatest(types.GO_TO_PAGE, goToPage),
    takeLatest(types.GO_TO_ROOT, goToRoot),
    takeLatest(types.GO_TO_LOGIN, goToLogin),
  ];
}
