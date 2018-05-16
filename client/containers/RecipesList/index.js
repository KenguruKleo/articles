import { connect } from 'react-redux';
import { clickOnRecipesItem } from '../../actions/recipes';
import RecipesList from './RecipesList';

const mapStateToProps = state => {
  const { data: { articles = [] }, fetching } = state.recipes;
  return {
    list: articles,
    fetching,
  };
};

export default connect(
  mapStateToProps,
  { clickOnRecipesItem },
)(RecipesList);
