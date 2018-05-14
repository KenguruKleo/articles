import * as types from './types';

export const fetchRecipesList = ({ filters = {} } = {}) => ({
  type: types.FETCH_RECIPES_LIST_REQUEST,
  filters,
});

export const fetchRecipesItem = (id, { filters = {} } = {}) => ({
  type: types.FETCH_RECIPES_ITEM_REQUEST,
  id,
  filters,
});

export const clickOnRecipesItem = id => ({
  type: types.CLICK_RECIPES_ITEM,
  id,
});

export const clickSaveRecipeRate = payload => ({
  type: types.CLICK_SAVE_RECIPE_RATE,
  payload,
});

export const clickLikeRecipe = id => ({
  type: types.CLICK_LIKE_RECIPE,
  id,
});
