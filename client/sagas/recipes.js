import { put, call, takeLatest, select } from 'redux-saga/effects';
import * as types from '../actions/types';
import Api from '../services/api';
import { goToPage, goToLogin } from '../actions/redirect';
import { getIsLoggedIn } from '../selectors/auth';

export function* fetchRecipesList({ filters }) {
  try {
    const { data } = yield call(Api.fetchRecipesList, { filters });
    yield put({
      type: types.FETCH_RECIPES_LIST_SUCCESS,
      data,
    });
  } catch (e) {
    yield put({
      type: types.FETCH_RECIPES_LIST_ERROR,
      error: {
        text: e.message,
      },
    });
  }
}

export function* fetchRecipesItem({ id, filters }) {
  try {
    const { data } = yield call(Api.fetchRecipesItem, id, { filters });
    yield put({
      type: types.FETCH_RECIPES_ITEM_SUCCESS,
      data,
    });
  } catch (e) {
    yield put({
      type: types.FETCH_RECIPES_ITEM_ERROR,
      error: {
        text: e.message,
      },
    });
  }
}

export function* clickRecipesItemOnList({ id }) {
  try {
    yield put(goToPage(`/recipes/${id}`));
  } catch (e) {} // eslint-disable-line
}

export function* setRecipeRate(payload) {
  try {
    const loggedIn = yield select(getIsLoggedIn);
    if (loggedIn) {
      yield put({
        ...payload,
        type: types.SET_RECIPE_RATE,
      });
    } else {
      yield put(goToLogin());
    }
  } catch (e) {} // eslint-disable-line
}

export function* setLikedRecipe(payload) {
  try {
    const loggedIn = yield select(getIsLoggedIn);
    if (loggedIn) {
      yield put({
        ...payload,
        type: types.SET_LIKE_RECIPE,
      });
    } else {
      yield put(goToLogin());
    }
  } catch (e) {} // eslint-disable-line
}

export default function saga() {
  return [
    takeLatest(types.FETCH_RECIPES_LIST_REQUEST, fetchRecipesList),
    takeLatest(types.FETCH_RECIPES_ITEM_REQUEST, fetchRecipesItem),
    takeLatest(types.CLICK_RECIPES_ITEM, clickRecipesItemOnList),
    takeLatest(types.CLICK_SAVE_RECIPE_RATE, setRecipeRate),
    takeLatest(types.CLICK_LIKE_RECIPE, setLikedRecipe),
  ];
}
