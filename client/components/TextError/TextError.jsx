import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';

import style from './TextError.scss';

class TextError extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any,
    theme: PropTypes.object.isRequired,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { theme, children } = this.props;
    if (!children) return null;
    return (
      <div className={theme.error}>
        {children}
      </div>
    );
  }
}

export default themr('TextError', style)(TextError);
