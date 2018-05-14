import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';

import style from './Icon.scss';

const Star = props => (
  <svg
    className={props.theme.star}
    width='16'
    height='16'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd'>
      <path
        d='M8 11.646L11.708 14l-.981-4.44L14 6.576l-4.315-.39L8 2 6.315 6.185 2 6.575l3.273 2.986L4.292 14z' />
    </g>
  </svg>
);

Star.propTypes = {
  theme: PropTypes.object.isRequired,
};

Star.defaultProps = {
};

export default themr('Star', style)(Star);
