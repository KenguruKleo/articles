import { connect } from 'react-redux';
import _get from 'lodash.get';
import { changeFieldValue, fieldOnFocus, fieldOnBlur } from '../../actions/field';
import InputField from './InputField';

const mapStateToProps = (state, props) => {
  const { path, fieldName, value } = props;
  const error = value || _get(state, `${path}.${fieldName}.error`);
  const visited = value || _get(state, `${path}.${fieldName}.visited`);
  return {
    value: value || _get(state, `${path}.${fieldName}.value`),
    error: (visited && error) || '',
  };
};

export default connect(
  mapStateToProps,
  { changeFieldValue, fieldOnFocus, fieldOnBlur },
)(InputField);
