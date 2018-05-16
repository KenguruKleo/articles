import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import Content from '../../components/Content';
import RecipeTitle from './RecipeTitle';
import RecipeDecription from './RecipeDecription';

import style from './Recipe.scss';

class Recipe extends React.PureComponent {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    recipe: PropTypes.object.isRequired,
    rateInfo: PropTypes.object.isRequired,
    isLiked: PropTypes.bool.isRequired,
    clickSaveRecipeRate: PropTypes.func.isRequired,
    clickLikeRecipe: PropTypes.func.isRequired,
    goToLogin: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired,
  };

  render() {
    const {
      theme, recipe, rateInfo, isLiked, clickSaveRecipeRate, clickLikeRecipe, loggedIn, goToLogin,
    } = this.props;

    return (
      <div className={theme.recipe}>
        <div className={theme.image}>
          <img src={recipe.urlToImage} alt={recipe.name} />
        </div>
        <Content theme={theme}>
          <div className={theme.recipe_details}>
            <RecipeTitle
              recipe={recipe}
              rateInfo={rateInfo}
              isLiked={isLiked}
              clickSaveRecipeRate={clickSaveRecipeRate}
              clickLikeRecipe={clickLikeRecipe}
              goToLogin={goToLogin}
              loggedIn={loggedIn}
              theme={theme} />
            <RecipeDecription
              recipe={recipe}
              theme={theme} />
          </div>
        </Content>
      </div>
    );
  }
}

export default themr('Recipe', style)(Recipe);
