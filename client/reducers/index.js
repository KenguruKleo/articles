import { combineReducers } from 'redux';
import auth from './auth';
import login from './login';
import recipes from './recipes';
import recipesItem from './recipesItem';

export default combineReducers({
  auth,
  login,
  recipes,
  recipesItem,
});
