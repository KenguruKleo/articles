import Recipes from '../containers/Recipes';
import RecipesItem from '../containers/RecipesItem';

export default {
  path: 'recipes',
  childRoutes: [
    {
      path: '',
      indexRoute: { component: Recipes },
    },
    {
      path: ':id',
      component: RecipesItem,
    },
  ],
};
