import { connect } from 'react-redux';
import { clickLogout } from '../../actions/auth';
import { goToLogin, goToRoot } from '../../actions/redirect';
import Header from './Header';

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  userName: state.auth.userName,
});

export default connect(
  mapStateToProps,
  { goToLogin, clickLogout, goToRoot },
)(Header);
