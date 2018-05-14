import React from 'react';
import { render } from 'react-dom';
import Modal from 'react-modal';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import history from './services/history';
import store from './services/store';
import routes from './routes';

import './assets/styles/base.scss';

const syncHistory = syncHistoryWithStore(history, store);

Modal.setAppElement(document.getElementById('root'));

render(
  <Provider store={store}>
    <Router history={syncHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root'),
);
