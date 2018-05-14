import { connect } from 'react-redux';
import RecipesItem from './RecipesItem';
import { fetchRecipesItem, clickSaveRecipeRate, clickLikeRecipe } from '../../actions/recipes';
import { goToLogin } from '../../actions/redirect';
import { getRecipeRateInfo, getIsLiked } from '../../selectors/recipes';
import { getIsLoggedIn } from '../../selectors/auth';

const mapStateToProps = state => {
  const { data: recipe, fetching, loaded } = state.recipesItem;
  return {
    recipe,
    fetching,
    loaded,
    rateInfo: getRecipeRateInfo(state, recipe.id),
    isLiked: getIsLiked(state, recipe.id),
    loggedIn: getIsLoggedIn(state),
  };
};

export default connect(
  mapStateToProps,
  {
    fetchRecipesItem, clickSaveRecipeRate, clickLikeRecipe, goToLogin,
  },
)(RecipesItem);
