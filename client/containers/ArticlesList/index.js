import { connect } from 'react-redux';
import { clickOnArticlesItem } from '../../actions/articles';
import ArticlesList from './ArticlesList';

const mapStateToProps = state => {
  const { data: { articles = [] }, fetching } = state.articles;
  return {
    list: articles,
    fetching,
  };
};

export default connect(
  mapStateToProps,
  { clickOnArticlesItem },
)(ArticlesList);
