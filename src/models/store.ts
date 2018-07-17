import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { History } from 'history';
import { rootReducer, rootSaga } from './root';

const enviroment = process.env.NODE_ENV;

export function configureStore(history: History) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares =
    enviroment === 'development'
      ? [sagaMiddleware, logger, routerMiddleware(history)]
      : [sagaMiddleware, routerMiddleware(history)];

  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  sagaMiddleware.run(rootSaga);
  return store;
}
