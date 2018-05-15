import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import Loading from '../../components/Loading';
import Recipe from '../../components/Recipe';

import style from './RecipesItem.scss';

class RecipesItem extends React.PureComponent {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    fetching: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired,
    fetchRecipesItem: PropTypes.func.isRequired,
    clickSaveRecipeRate: PropTypes.func.isRequired,
    clickLikeRecipe: PropTypes.func.isRequired,
    goToLogin: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    recipe: PropTypes.object,
    rateInfo: PropTypes.object,
    isLiked: PropTypes.bool,
    loggedIn: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    recipe: {},
    rateInfo: {},
    isLiked: false,
  };

  componentDidMount() {
    this.props.fetchRecipesItem(this.props.match.params.id);
  }

  getRecipe = () => {
    const {
      theme, recipe, rateInfo, isLiked, clickSaveRecipeRate, clickLikeRecipe, loaded, loggedIn, goToLogin,
    } = this.props;
    return (
      loaded ? <Recipe
        recipe={recipe}
        rateInfo={rateInfo}
        isLiked={isLiked}
        clickSaveRecipeRate={clickSaveRecipeRate}
        clickLikeRecipe={clickLikeRecipe}
        goToLogin={goToLogin}
        loggedIn={loggedIn}
        theme={theme} /> : <div />
    );
  };

  render() {
    const { theme, fetching } = this.props;
    return (
      <div className={theme.recipes_item}>
        {
          fetching ? <Loading /> : this.getRecipe()
        }
      </div>
    );
  }
}

export default themr('RecipesItem', style)(RecipesItem);
