import { combineReducers } from 'redux';
import auth from './auth';
import login from './login';
import articles from './articles';
import articlesItem from './articlesItem';

export default combineReducers({
  auth,
  login,
  articles,
  articlesItem,
});
