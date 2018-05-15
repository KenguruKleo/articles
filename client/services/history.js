import { createBrowserHistory as createHistory } from 'history';
// import { createHashHistory as createHistory } from 'history';

const history = createHistory({
  basename: '',
  forceRefresh: false,
  keyLength: 6,
});

export default history;
