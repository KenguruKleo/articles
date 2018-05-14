import App from '../containers/App';
import recipes from './recipes';
import auth from './auth';

const childRoutes = [
  recipes,
  auth,
];

export default {
  path: '/',
  component: App,
  indexRoute: {
    onEnter: (_, replace) => replace('/recipes'),
  },
  childRoutes,
};
