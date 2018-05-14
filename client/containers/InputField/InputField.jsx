import React from 'react';
import PropTypes from 'prop-types';

class InputField extends React.PureComponent {
  static propTypes = {
    Component: PropTypes.func.isRequired,
    changeFieldValue: PropTypes.func.isRequired,
    fieldOnFocus: PropTypes.func.isRequired,
    fieldOnBlur: PropTypes.func.isRequired,
    fieldName: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  };

  handleChange = value => {
    const { fieldName, path, changeFieldValue } = this.props;
    changeFieldValue({
      value,
      fieldName,
      path,
    });
  };

  handleOnFocus = () => {
    const { fieldName, path, fieldOnFocus } = this.props;
    fieldOnFocus({
      fieldName,
      path,
    });
  };

  handleOnBlur = () => {
    const { fieldName, path, fieldOnBlur } = this.props;
    fieldOnBlur({
      fieldName,
      path,
    });
  };

  render() {
    const { Component, ...props } = this.props;
    return (
      <Component
        onChange={this.handleChange}
        onFocus={this.handleOnFocus}
        onBlur={this.handleOnBlur}
        {...props} />
    );
  }
}

export default InputField;
