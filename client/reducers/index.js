import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import auth from './auth';
import login from './login';
import recipes from './recipes';
import recipesItem from './recipesItem';

export default combineReducers({
  routing,
  auth,
  login,
  recipes,
  recipesItem,
});
