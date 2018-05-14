import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import cn from 'classname';
import RateLevel from '../../RateLevel';
import BigStar from '../../Icons/BigStar';
import BigHeart from '../../Icons/BigHeart';
import BigDownload from '../../Icons/BigDownload';
import RateRecipe from '../../RateRecipe';

import style from './RecipeTitle.scss';

class RecipeTitle extends React.PureComponent {
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

  state = {
    isRateRecipeOpen: false,
  };

  handleClickOnRate = () => {
    if (!this.props.loggedIn) {
      this.props.goToLogin();
    } else {
      this.setState({
        isRateRecipeOpen: !this.state.isRateRecipeOpen,
      });
    }
  };

  handleCloseRateRecipe = () => {
    this.setState({
      isRateRecipeOpen: false,
    });
  };

  handleClickSave = rateInfo => {
    const { recipe: { id } } = this.props;
    this.props.clickSaveRecipeRate({
      ...rateInfo,
      id,
    });
    this.setState({
      isRateRecipeOpen: false,
    });
  };

  handleClickLike = () => {
    const { recipe: { id } } = this.props;
    this.props.clickLikeRecipe(id);
  };

  render() {
    const {
      theme, recipe, rateInfo, isLiked,
    } = this.props;
    const rate = +(recipe.averageRating || 0);

    return (
      <div className={theme.recipe_title}>
        <div className={theme.text_block}>
          <h1 className={theme.title}>
            {recipe.name}
          </h1>
          <h2 className={theme.headline}>
            {recipe.headline}
          </h2>
          <div className={theme.rate}>
            <RateLevel theme={theme} rate={rate} />
            <span className={theme.rate_description}>
              Rated {recipe.averageRating} / 4
            </span>
          </div>
        </div>
        <div className={theme.icon_block}>
          <div
            className={theme.icon}
            onKeyPress={this.handleClickOnRate}
            onClick={this.handleClickOnRate}>
            <span
              className={
                cn(theme.icon_rate, {
                  [theme.filled]: !!rateInfo.rate,
                  [theme.empty]: !rateInfo.rate,
                })
              }>
              <BigStar theme={theme} />
            </span>
          </div>
          <div
            className={theme.icon}
            onKeyPress={this.handleClickLike}
            onClick={this.handleClickLike}>
            <span
              className={
                cn(theme.icon_like, { [theme.filled]: isLiked })
              }>
              <BigHeart theme={theme} />
            </span>
          </div>
          <div className={theme.icon}>
            <span className={theme.icon_download}><BigDownload theme={theme} /></span>
          </div>
        </div>
        <RateRecipe
          rate={rateInfo.rate || 0}
          comments={rateInfo.comments || ''}
          theme={theme}
          onRequestClose={this.handleCloseRateRecipe}
          clickOnSave={this.handleClickSave}
          isOpen={this.state.isRateRecipeOpen} />
      </div>
    );
  }
}

export default themr('RecipeTitle', style)(RecipeTitle);
