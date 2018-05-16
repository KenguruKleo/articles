import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import cn from 'classname';
import RateLevel from '../../RateLevel';
import BigStar from '../../Icons/BigStar';
import BigHeart from '../../Icons/BigHeart';
import BigDownload from '../../Icons/BigDownload';
import RateArticle from '../../RateArticle';

import style from './ArticleTitle.scss';

class ArticleTitle extends React.PureComponent {
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

  state = {
    isRateArticleOpen: false,
  };

  handleClickOnRate = () => {
    if (!this.props.loggedIn) {
      this.props.goToLogin();
    } else {
      this.setState({
        isRateArticleOpen: !this.state.isRateArticleOpen,
      });
    }
  };

  handleCloseRateArticle = () => {
    this.setState({
      isRateArticleOpen: false,
    });
  };

  handleClickSave = rateInfo => {
    const { article: { id } } = this.props;
    this.props.clickSaveArticleRate({
      ...rateInfo,
      id,
    });
    this.setState({
      isRateArticleOpen: false,
    });
  };

  handleClickLike = () => {
    const { article: { id } } = this.props;
    this.props.clickLikeArticle(id);
  };

  render() {
    const {
      theme, article, rateInfo, isLiked,
    } = this.props;
    const rate = +(article.averageRating || 0);

    return (
      <div className={theme.article_title}>
        <div className={theme.text_block}>
          <h1 className={theme.title}>
            {article.author}
          </h1>
          <h2 className={theme.headline}>
            {article.title}
          </h2>
          <div className={theme.rate}>
            <RateLevel theme={theme} rate={rate} />
            <span className={theme.rate_description}>
              Rated {article.averageRating} / 4
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
        <RateArticle
          rate={rateInfo.rate || 0}
          comments={rateInfo.comments || ''}
          theme={theme}
          onRequestClose={this.handleCloseRateArticle}
          clickOnSave={this.handleClickSave}
          isOpen={this.state.isRateArticleOpen} />
      </div>
    );
  }
}

export default themr('ArticleTitle', style)(ArticleTitle);
