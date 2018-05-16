import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import Content from '../../components/Content';
import ArticlesList from '../ArticlesList';

import style from './Articles.scss';

class Articles extends React.PureComponent {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    fetchArticlesList: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchArticlesList();
  }

  render() {
    const { theme } = this.props;
    return (
      <div className={theme.articles}>
        <Content theme={theme}>
          <ArticlesList
            theme={theme} />
        </Content>
      </div>
    );
  }
}

export default themr('Articles', style)(Articles);
