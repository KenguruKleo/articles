import { connect } from 'react-redux';
import ArticlesItem from './ArticlesItem';
import { fetchArticlesItem, clickSaveArticleRate, clickLikeArticle } from '../../actions/articles';
import { goToLogin } from '../../actions/redirect';
import { getArticleRateInfo, getIsLiked } from '../../selectors/articles';
import { getIsLoggedIn } from '../../selectors/auth';

const mapStateToProps = state => {
  const { data: article, fetching, loaded } = state.articlesItem;
  return {
    article,
    fetching,
    loaded,
    rateInfo: getArticleRateInfo(state, article.id),
    isLiked: getIsLiked(state, article.id),
    loggedIn: getIsLoggedIn(state),
  };
};

export default connect(
  mapStateToProps,
  {
    fetchArticlesItem, clickSaveArticleRate, clickLikeArticle, goToLogin,
  },
)(ArticlesItem);
