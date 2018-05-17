import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers/index';
import sagas from '../sagas/index';
import { initApp } from '../actions';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  && process.env.NODE_ENV !== 'production'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const middleware = [sagaMiddleware];

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducer, enhancer);

sagaMiddleware.run(sagas);

store.dispatch(initApp());

export default store;
