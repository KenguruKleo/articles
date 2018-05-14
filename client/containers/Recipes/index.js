import { connect } from 'react-redux';
import Recipes from './Recipes';
import { fetchRecipesList } from '../../actions/recipes';

export default connect(
  null,
  { fetchRecipesList },
)(Recipes);
