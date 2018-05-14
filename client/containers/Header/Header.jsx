import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import Button from '../../components/Button';

import style from './Header.scss';

class Header extends React.PureComponent {
  static propTypes = {
    goToRoot: PropTypes.func.isRequired,
    goToLogin: PropTypes.func.isRequired,
    clickLogout: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    userName: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired,
  };

  getNotLogged = () => {
    const { theme, goToLogin } = this.props;
    return (
      <Button
        onClick={goToLogin}
        theme={theme}>
        LOG IN
      </Button>
    );
  };

  getLogged = () => {
    const { theme, userName, clickLogout } = this.props;
    return (
      <span className={theme.user_logged}>
        <span className={theme.user_name}>
          {userName}
        </span>
        <Button
          onClick={clickLogout}
          theme={theme}>
          LOGOUT
        </Button>
      </span>
    );
  };

  render() {
    const { theme, loggedIn, goToRoot } = this.props;
    return (
      <div className={theme.header}>
        <button
          onClick={goToRoot}
          className={theme.logo} />
        <div className={theme.content}>
          <button
            onClick={goToRoot}
            className={theme.logo_text}>
            Recipes
          </button>
          <div className={theme.menu}>
            <button className={theme.menu_item}>Our Plans</button>
            <button className={theme.menu_item}>How It Works</button>
            <button className={theme.menu_item}>Our Menus</button>
            <button className={theme.menu_item}>Wine</button>
            <button className={theme.menu_item}>Gifts</button>
          </div>
          <div className={theme.user_block}>
            {loggedIn ? this.getLogged() : this.getNotLogged()}
          </div>
        </div>
      </div>
    );
  }
}

export default themr('Header', style)(Header);
