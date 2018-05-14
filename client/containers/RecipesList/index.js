import { connect } from 'react-redux';
import { clickOnRecipesItem } from '../../actions/recipes';
import RecipesList from './RecipesList';

const mapStateToProps = state => {
  const { data: { items = [] }, fetching } = state.recipes;
  return {
    list: items,
    fetching,
  };
};

export default connect(
  mapStateToProps,
  { clickOnRecipesItem },
)(RecipesList);
