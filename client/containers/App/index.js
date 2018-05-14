import { connect } from 'react-redux';
import App from './App';
import { initApp } from '../../actions';

export default connect(
  null,
  { initApp },
)(App);
