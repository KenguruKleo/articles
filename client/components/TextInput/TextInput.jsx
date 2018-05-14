import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';

import style from './TextInput.scss';

class TextInput extends React.PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    type: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
    value: PropTypes.string,
    theme: PropTypes.object.isRequired,
  };

  static defaultProps = {
    type: 'text',
    label: '',
    error: '',
    value: '',
  };

  handleChange = event => {
    this.props.onChange(event.target.value);
  };

  handleOnFocus = () => {
    this.props.onFocus();
  };

  handleOnBlur = () => {
    this.props.onBlur();
  };

  render() {
    const {
      theme, label, error, value, type,
    } = this.props;
    return (
      <div className={theme.text_input}>
        {label && <span className={theme.label}>{label}</span>}
        <input
          value={value}
          onChange={this.handleChange}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          type={type} />
        {error && <span className={theme.error}>{error}</span>}
      </div>
    );
  }
}

export default themr('TextInput', style)(TextInput);
