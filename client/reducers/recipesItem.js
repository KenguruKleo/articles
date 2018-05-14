import { combineReducers } from 'redux';
import * as types from '../actions/types';


const loaded = (state = false, action = {}) => {
  switch (action.type) {
    case types.FETCH_RECIPES_ITEM_REQUEST:
    case types.FETCH_RECIPES_ITEM_ERROR:
      return false;
    case types.FETCH_RECIPES_ITEM_SUCCESS:
      return true;
    default:
      return state;
  }
};

const fetching = (state = false, action = {}) => {
  switch (action.type) {
    case types.FETCH_RECIPES_ITEM_REQUEST:
      return true;
    case types.FETCH_RECIPES_ITEM_ERROR:
    case types.FETCH_RECIPES_ITEM_SUCCESS:
      return false;
    default:
      return state;
  }
};

const errorText = (state = '', action = {}) => {
  switch (action.type) {
    case types.FETCH_RECIPES_ITEM_REQUEST:
    case types.FETCH_RECIPES_ITEM_SUCCESS:
      return '';
    case types.FETCH_RECIPES_ITEM_ERROR:
      return action.error.text;
    default:
      return state;
  }
};

const data = (state = {}, action = {}) => {
  switch (action.type) {
    case types.FETCH_RECIPES_ITEM_SUCCESS:
      return action.data;
    case types.FETCH_RECIPES_ITEM_REQUEST:
    case types.FETCH_RECIPES_ITEM_ERROR:
      return {};
    default:
      return state;
  }
};

export default combineReducers({
  fetching,
  loaded,
  errorText,
  data,
});
