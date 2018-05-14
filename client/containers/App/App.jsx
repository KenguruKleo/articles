import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import Header from '../Header';
import Footer from '../Footer';

import style from './App.scss';

class App extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
    initApp: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.initApp();
  }

  render() {
    const { theme } = this.props;
    return (
      <div className={theme.main}>
        <Header />
        <div className={theme.content}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default themr('App', style)(App);
