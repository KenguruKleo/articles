import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';

import style from './Content.scss';

class Content extends React.PureComponent {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    children: PropTypes.any.isRequired,
  };

  render() {
    const { theme, children } = this.props;
    return (
      <div className={theme.container}>
        <div className={theme.content}>
          {children}
        </div>
      </div>
    );
  }
}

export default themr('Content', style)(Content);
