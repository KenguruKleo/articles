import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import { getPrepTimeFromArticle } from '../../../helpers/converters';

import style from './ArticleDescription.scss';

class ArticleDescription extends React.PureComponent {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    article: PropTypes.object.isRequired,
  };

  getPreparationInfoItem = (title, details) => {
    const { theme } = this.props;
    return (
      <div className={theme.prep_item}>
        <div className={theme.prep_title}>{title}</div>
        <div className={theme.prep_details}>{details}</div>
      </div>
    );
  };

  getTags = (title, tags) => {
    const { theme } = this.props;
    return (
      <div className={theme.tags}>
        <span className={theme.tags_title}>{title}</span>
        {
          tags.map(({ id, name }, index) => (
            <span key={id}>
              {index > 0 ? <span className={theme.tags_item_divide}>•</span> : null}
              <span className={theme.tags_item}>
                {name}
              </span>
            </span>
          ))
        }
      </div>
    );
  };

  render() {
    const { theme, article } = this.props;

    const { prepTime, prepTimeUnit } = getPrepTimeFromArticle(article);
    const { difficulty, tags = [], allergens = [] } = article;

    return (
      <div className={theme.article_description}>
        <div className={theme.description_block}>
          <div className={theme.description}>
            {article.description}
          </div>
          <div className={theme.prep_info}>
            {prepTime && this.getPreparationInfoItem('Preparation Time', `${prepTime} ${prepTimeUnit}`)}
            {difficulty && this.getPreparationInfoItem('Cooking difficulty', `Level ${difficulty}`)}
          </div>
        </div>
        {this.getTags('Tags:', tags)}
        {this.getTags('Allergens:', allergens)}
      </div>
    );
  }
}

export default themr('ArticleDescription', style)(ArticleDescription);
