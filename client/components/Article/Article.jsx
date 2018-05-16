import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import Content from '../../components/Content';
import ArticleTitle from './ArticleTitle';
import ArticleDecription from './ArticleDescription';

import style from './Article.scss';

class Article extends React.PureComponent {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    article: PropTypes.object.isRequired,
    rateInfo: PropTypes.object.isRequired,
    isLiked: PropTypes.bool.isRequired,
    clickSaveArticleRate: PropTypes.func.isRequired,
    clickLikeArticle: PropTypes.func.isRequired,
    goToLogin: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired,
  };

  render() {
    const {
      theme, article, rateInfo, isLiked, clickSaveArticleRate, clickLikeArticle, loggedIn, goToLogin,
    } = this.props;

    return (
      <div className={theme.article}>
        <div className={theme.image}>
          <img src={article.urlToImage} alt={article.name} />
        </div>
        <Content theme={theme}>
          <div className={theme.article_details}>
            <ArticleTitle
              article={article}
              rateInfo={rateInfo}
              isLiked={isLiked}
              clickSaveArticleRate={clickSaveArticleRate}
              clickLikeArticle={clickLikeArticle}
              goToLogin={goToLogin}
              loggedIn={loggedIn}
              theme={theme} />
            <ArticleDecription
              article={article}
              theme={theme} />
          </div>
        </Content>
      </div>
    );
  }
}

export default themr('Article', style)(Article);
