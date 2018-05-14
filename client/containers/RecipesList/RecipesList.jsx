import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import Loading from '../../components/Loading';
import RecipeCard from '../../components/RecipeCard';

import style from './RecipesList.scss';

class RecipesList extends React.PureComponent {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    fetching: PropTypes.bool.isRequired,
    list: PropTypes.array,
    clickOnRecipesItem: PropTypes.func.isRequired,
  };

  static defaultProps = {
    list: [],
  };

  getList = () => {
    const { list, theme, clickOnRecipesItem } = this.props;
    return (
      list.map(recipe => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          clickOnRecipesItem={clickOnRecipesItem}
          theme={theme} />
      ))
    );
  };

  render() {
    const { theme, fetching } = this.props;
    return (
      <div className={theme.recipes_list}>
        {
          fetching ? <Loading /> : this.getList()
        }
      </div>
    );
  }
}

export default themr('RecipesList', style)(RecipesList);
