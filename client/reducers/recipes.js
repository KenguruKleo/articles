import { combineReducers } from 'redux';
import * as types from '../actions/types';

const fetching = (state = false, action = {}) => {
  switch (action.type) {
    case types.FETCH_RECIPES_LIST_REQUEST:
      return true;
    case types.FETCH_RECIPES_LIST_ERROR:
    case types.FETCH_RECIPES_LIST_SUCCESS:
      return false;
    default:
      return state;
  }
};

const errorText = (state = '', action = {}) => {
  switch (action.type) {
    case types.FETCH_RECIPES_LIST_REQUEST:
    case types.FETCH_RECIPES_LIST_SUCCESS:
      return '';
    case types.FETCH_RECIPES_LIST_ERROR:
      return action.error.text;
    default:
      return state;
  }
};

const data = (state = {}, action = {}) => {
  switch (action.type) {
    case types.FETCH_RECIPES_LIST_SUCCESS:
      return action.data;
    case types.FETCH_RECIPES_LIST_REQUEST:
    case types.FETCH_RECIPES_LIST_ERROR:
      return {};
    default:
      return state;
  }
};

const ratedRecipes = (state = {}, action = {}) => {
  switch (action.type) {
    case types.SET_RECIPE_RATE: {
      const { id, rate, comments } = action.payload;
      return {
        ...state,
        [id]: { rate, comments },
      };
    }
    default:
      return state;
  }
};

const likedRecipes = (state = {}, action = {}) => {
  switch (action.type) {
    case types.SET_LIKE_RECIPE:
      return {
        ...state,
        [action.id]: !state[action.id],
      };
    default:
      return state;
  }
};

export default combineReducers({
  fetching,
  errorText,
  data,
  ratedRecipes,
  likedRecipes,
});
