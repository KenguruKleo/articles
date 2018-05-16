import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import RateLevel from '../RateLevel';
import { getKcalFromArticle, getPrepTimeFromArticle } from '../../helpers/converters';

import style from './ArticleCard.scss';

class ArticleCard extends React.PureComponent {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    article: PropTypes.object.isRequired,
    clickOnArticlesItem: PropTypes.func.isRequired,
  };

  handleClick = () => {
    this.props.clickOnArticlesItem(this.props.article.id);
  };

  render() {
    const { theme, article } = this.props;

    const { amount: kcal, unit: kcalUnit } = getKcalFromArticle(article);
    const { prepTime, prepTimeUnit } = getPrepTimeFromArticle(article);

    return (
      <div
        onClick={this.handleClick}
        onKeyDown={this.handleClick}
        className={theme.article_card}>
        <div className={theme.image}>
          <img src={article.urlToImage} alt={article.title} />
        </div>
        <div className={theme.description}>
          <div className={theme.title}>
            {article.author}
          </div>
          <div className={theme.headline}>
            {article.title}
          </div>
          <div className={theme.details}>
            <div className={theme.info}>
              {kcal && <span>{kcal} {kcalUnit}</span>}
              {prepTime && <span>{prepTime} {prepTimeUnit}</span>}
            </div>
            <div className={theme.rate}>
              <RateLevel theme={theme} rate={+(article.averageRating || 0)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default themr('ArticleCard', style)(ArticleCard);
