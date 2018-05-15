import React from 'react';
import { render } from 'react-dom';
import Modal from 'react-modal';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './services/history';
import store from './services/store';
import App from './containers/App';

import './assets/styles/base.scss';

Modal.setAppElement(document.getElementById('root'));

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
