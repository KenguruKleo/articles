import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import Star from './Star';
import HalfStar from './HalfStar';

import style from './Icon.scss';

const HalfFilledStar = props => (
  <span className={props.theme.half_filled_star}>
    <Star theme={props.theme} />
    <HalfStar theme={props.theme} />
  </span>
);

HalfFilledStar.propTypes = {
  theme: PropTypes.object.isRequired,
};

HalfFilledStar.defaultProps = {
};

export default themr('HalfStar', style)(HalfFilledStar);
