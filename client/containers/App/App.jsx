import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { themr } from 'react-css-themr';
import Header from '../Header';
import Footer from '../Footer';
import Recipes from '../Recipes';
import RecipesItem from '../RecipesItem';
import Login from '../Login';

import style from './App.scss';

class App extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
  };

  state={};

  render() {
    const { theme } = this.props;
    return (
      <div className={theme.main}>
        <Header />
        <div className={theme.content}>
          <Route exact path='/' render={() => <Redirect to={{ pathname: '/recipes' }} />} />
          <Switch>
            <Route path='/recipes' exact component={Recipes} />
            <Route path='/recipes/:id' component={RecipesItem} />
            <Route path='/login' component={Login} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default themr('App', style)(App);
