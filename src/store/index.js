import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';

import RootSagas from './RootSagas';
import RootReducers from './RootReducers';

const sagaMiddleware = createSagaMiddleware();

const storeApp = () => {
  const store = createStore(
    RootReducers,
    {},
    applyMiddleware(createLogger(), sagaMiddleware),
  );
  sagaMiddleware.run(RootSagas);

  return store;
};

export const store = storeApp();
