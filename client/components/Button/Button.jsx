import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classname';
import { themr } from 'react-css-themr';

import style from './Button.scss';

class Button extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
    onClick: PropTypes.func,
    disable: PropTypes.bool,
    theme: PropTypes.object.isRequired,
  };

  static defaultProps = {
    disable: false,
    onClick: undefined,
  };

  handleClick = () => {
    if (!this.props.disable) {
      this.props.onClick();
    }
  };

  render() {
    const { theme, children, disable } = this.props;
    return (
      <button
        className={cn({
          [theme.button]: true,
          [theme.disable]: disable,
        })}
        onClick={this.handleClick}>
        <span className={theme.button_content}>
          {children}
        </span>
      </button>
    );
  }
}

export default themr('Button', style)(Button);
