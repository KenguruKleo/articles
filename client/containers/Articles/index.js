import { connect } from 'react-redux';
import Articles from './Articles';
import { fetchArticlesList } from '../../actions/articles';

export default connect(
  null,
  { fetchArticlesList },
)(Articles);
