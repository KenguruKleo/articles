import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';

import style from './Icon.scss';

const BigStar = props => (
  <svg
    className={props.theme.big_star}
    width='25'
    height='24'
    strokeWidth='2'
    fill='transparent'
    viewBox='0 0 38 36'
    xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd'>
      <path
        d='M 19.022 29.348 L 7.577 35.394 l 2.186 -12.806 l -9.26 -9.069 L 13.3 11.651 L 19.022 0 l 5.723 11.65
          l 12.796 1.87 l -9.26 9.068 l 2.186 12.806 Z' />
    </g>
  </svg>
);

BigStar.propTypes = {
  theme: PropTypes.object.isRequired,
};

BigStar.defaultProps = {
};

export default themr('BigStar', style)(BigStar);
