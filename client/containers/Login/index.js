import { connect } from 'react-redux';
import Login from './Login';
import { clickLogin } from '../../actions/auth';

const mapStateToProps = state => ({
  isPending: state.auth.isPending,
  errorText: state.auth.errorText,
  valid: state.login.valid,
});

export default connect(
  mapStateToProps,
  { clickLogin },
)(Login);
