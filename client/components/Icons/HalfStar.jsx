import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import Star from './Star';

import style from './Icon.scss';

const HalfStar = props => (
  <span className={props.theme.half_star}>
    <Star theme={props.theme} />
  </span>
);

HalfStar.propTypes = {
  theme: PropTypes.object.isRequired,
};

HalfStar.defaultProps = {
};

export default themr('HalfStar', style)(HalfStar);
