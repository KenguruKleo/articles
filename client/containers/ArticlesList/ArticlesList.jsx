import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import Loading from '../../components/Loading';
import ArticleCard from '../../components/ArticleCard';

import style from './ArticlesList.scss';

class ArticlesList extends React.PureComponent {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    fetching: PropTypes.bool.isRequired,
    list: PropTypes.array,
    clickOnArticlesItem: PropTypes.func.isRequired,
  };

  static defaultProps = {
    list: [],
  };

  getList = () => {
    const { list, theme, clickOnArticlesItem } = this.props;
    return (
      list.map(article => (
        <ArticleCard
          key={article.id}
          article={article}
          clickOnArticlesItem={clickOnArticlesItem}
          theme={theme} />
      ))
    );
  };

  render() {
    const { theme, fetching } = this.props;
    return (
      <div className={theme.articles_list}>
        {
          fetching ? <Loading /> : this.getList()
        }
      </div>
    );
  }
}

export default themr('ArticlesList', style)(ArticlesList);
