import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';

import style from './Icon.scss';

const BigDownload = props => (
  <svg
    className={props.theme.big_star}
    width='23'
    height='20'
    viewBox='0 0 16 14'
    xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd'>
      <path
        d='M11.98 6a.494.494 0 0 0-.363.14L8.526 9.226V.518a.53.53 0 0 0-.144-.375A.534.534 0 0 0 8.006 0a.509.509
          0 0 0-.52.518v8.72L4.384 6.142a.526.526 0 0 0-.364-.142.47.47 0 0 0-.363.156.494.494 0 0 0-.156.363.47.47
          0 0 0 .156.363l3.935 3.912a.142.142 0 0 0 .051.052c.043.031.087.06.13.09a.433.433 0 0 0
          .234.065l.079-.012h.025a.4.4 0 0 0 .142-.053c.044-.03.087-.059.13-.09l3.974-3.964a.494.494 0 0 0
          .144-.363.54.54 0 0 0-.144-.377.54.54 0 0 0-.375-.142zm3.873 7.85A.46.46 0 0 0 16 13.5a.502.502 0 0
          0-.147-.362.466.466 0 0 0-.343-.138H.49a.507.507 0 0 0-.355.138A.523.523 0 0 0 0 13.5a.478.478 0 0 0
          .135.35c.101.102.219.151.355.15h15.02a.439.439 0 0 0 .343-.15z' />
    </g>
  </svg>
);

BigDownload.propTypes = {
  theme: PropTypes.object.isRequired,
};

BigDownload.defaultProps = {
};

export default themr('BigDownload', style)(BigDownload);
