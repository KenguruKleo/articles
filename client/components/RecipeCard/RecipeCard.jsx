import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import RateLevel from '../RateLevel';
import { getKcalFromRecipe, getPrepTimeFromRecipe } from '../../helpers/converters';

import style from './RecipeCard.scss';

class RecipeCard extends React.PureComponent {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    recipe: PropTypes.object.isRequired,
    clickOnRecipesItem: PropTypes.func.isRequired,
  };

  handleClick = () => {
    this.props.clickOnRecipesItem(this.props.recipe.id);
  };

  render() {
    const { theme, recipe } = this.props;

    const { amount: kcal, unit: kcalUnit } = getKcalFromRecipe(recipe);
    const { prepTime, prepTimeUnit } = getPrepTimeFromRecipe(recipe);

    return (
      <div
        onClick={this.handleClick}
        onKeyDown={this.handleClick}
        className={theme.recipe_card}>
        <div className={theme.image}>
          <img src={recipe.urlToImage} alt={recipe.title} />
        </div>
        <div className={theme.description}>
          <div className={theme.title}>
            {recipe.author}
          </div>
          <div className={theme.headline}>
            {recipe.title}
          </div>
          <div className={theme.details}>
            <div className={theme.info}>
              {kcal && <span>{kcal} {kcalUnit}</span>}
              {prepTime && <span>{prepTime} {prepTimeUnit}</span>}
            </div>
            <div className={theme.rate}>
              <RateLevel theme={theme} rate={+(recipe.averageRating || 0)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default themr('RecipeCard', style)(RecipeCard);
