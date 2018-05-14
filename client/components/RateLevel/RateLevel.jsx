import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import Star from '../Icons/Star';
import HalfFilledStar from '../Icons/HalfFilledStar';

import style from './RateLevel.scss';

class RateLevel extends React.PureComponent {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    rate: PropTypes.number.isRequired,
  };

  static defaultProps = {
  };

  /**
   * value >= (position - 0.5) && , return 'full'
   * value >= (position - 1) && value < (position - 0.5), return 'halfFull'
   * value <= (position - 1), return 'empty'
   */
  getRatedStarByPosition = (value, position) => {
    const { theme } = this.props;
    if (value >= position - 0.5) {
      return <span className={theme.fill_full}><Star theme={theme} /></span>;
    } else if (value >= position - 1) {
      return <span className={theme.fill_full}><HalfFilledStar theme={theme} /></span>;
    }
    return <span className={theme.fill_empty}><Star theme={theme} /></span>;
  };

  render() {
    const { theme, rate } = this.props;

    return (
      <div className={theme.rate_level}>
        {this.getRatedStarByPosition(rate, 1)}
        {this.getRatedStarByPosition(rate, 2)}
        {this.getRatedStarByPosition(rate, 3)}
        {this.getRatedStarByPosition(rate, 4)}
      </div>
    );
  }
}

export default themr('RateLevel', style)(RateLevel);
