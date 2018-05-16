import { put, call, takeLatest, select } from 'redux-saga/effects';
import base64url from 'base64-url';
import * as types from '../actions/types';
import Api from '../services/api';
import { goToPage, goToLogin } from '../actions/redirect';
import { getIsLoggedIn } from '../selectors/auth';

export function* fetchArticlesList({ filters }) {
  try {
    const { data } = yield call(Api.fetchArticlesList, { filters });
    const processedData = {
      ...data,
      articles: (data.articles || [])
        .map((article, index) => ({
          ...article,
          id: base64url.encode(article.title || `article-${index}`),
        })),
    };
    yield put({
      type: types.FETCH_RECIPES_LIST_SUCCESS,
      data: processedData,
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

export function* fetchArticlesItem({ id, filters }) {
  try {
    const { data } = yield call(Api.fetchArticlesItem, id, { filters });
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
    takeLatest(types.FETCH_RECIPES_LIST_REQUEST, fetchArticlesList),
    takeLatest(types.FETCH_RECIPES_ITEM_REQUEST, fetchArticlesItem),
    takeLatest(types.CLICK_RECIPES_ITEM, clickRecipesItemOnList),
    takeLatest(types.CLICK_SAVE_RECIPE_RATE, setRecipeRate),
    takeLatest(types.CLICK_LIKE_RECIPE, setLikedRecipe),
  ];
}
