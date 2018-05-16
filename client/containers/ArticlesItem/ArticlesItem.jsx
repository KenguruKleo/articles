import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import Loading from '../../components/Loading';
import Article from '../../components/Article';

import style from './ArticlesItem.scss';

class ArticlesItem extends React.PureComponent {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    fetching: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired,
    fetchArticlesItem: PropTypes.func.isRequired,
    clickSaveArticleRate: PropTypes.func.isRequired,
    clickLikeArticle: PropTypes.func.isRequired,
    goToLogin: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    article: PropTypes.object,
    rateInfo: PropTypes.object,
    isLiked: PropTypes.bool,
    loggedIn: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    article: {},
    rateInfo: {},
    isLiked: false,
  };

  componentDidMount() {
    this.props.fetchArticlesItem(this.props.match.params.id);
  }

  getArticle = () => {
    const {
      theme, article, rateInfo, isLiked, clickSaveArticleRate, clickLikeArticle, loaded, loggedIn, goToLogin,
    } = this.props;
    return (
      loaded ? <Article
        article={article}
        rateInfo={rateInfo}
        isLiked={isLiked}
        clickSaveArticleRate={clickSaveArticleRate}
        clickLikeArticle={clickLikeArticle}
        goToLogin={goToLogin}
        loggedIn={loggedIn}
        theme={theme} /> : <div />
    );
  };

  render() {
    const { theme, fetching } = this.props;
    return (
      <div className={theme.articles_item}>
        {
          fetching ? <Loading /> : this.getArticle()
        }
      </div>
    );
  }
}

export default themr('ArticlesItem', style)(ArticlesItem);
