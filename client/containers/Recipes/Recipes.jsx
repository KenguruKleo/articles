import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import Content from '../../components/Content';
import RecipesList from '../RecipesList';

import style from './Recipes.scss';

class Recipes extends React.PureComponent {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    fetchRecipesList: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchRecipesList();
  }

  render() {
    const { theme } = this.props;
    return (
      <div className={theme.recipes}>
        <Content theme={theme}>
          <RecipesList
            theme={theme} />
        </Content>
      </div>
    );
  }
}

export default themr('Recipes', style)(Recipes);
