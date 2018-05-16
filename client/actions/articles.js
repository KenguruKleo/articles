import * as types from './types';

export const fetchArticlesList = ({ filters = {} } = {}) => ({
  type: types.FETCH_ARTICLES_LIST_REQUEST,
  filters,
});

export const fetchArticlesItem = (id, { filters = {} } = {}) => ({
  type: types.FETCH_ARTICLES_ITEM_REQUEST,
  id,
  filters,
});

export const clickOnArticlesItem = id => ({
  type: types.CLICK_ARTICLES_ITEM,
  id,
});

export const clickSaveArticleRate = payload => ({
  type: types.CLICK_SAVE_ARTICLE_RATE,
  payload,
});

export const clickLikeArticle = id => ({
  type: types.CLICK_LIKE_ARTICLE,
  id,
});
