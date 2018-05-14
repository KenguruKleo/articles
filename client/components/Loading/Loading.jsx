import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';

import style from './Loading.scss';

class Loading extends React.PureComponent {
  static propTypes = {
    theme: PropTypes.object.isRequired,
  };

  render() {
    const { theme } = this.props;
    return (
      <div className={theme.loading}>
        Loading...
      </div>
    );
  }
}

export default themr('Loading', style)(Loading);
