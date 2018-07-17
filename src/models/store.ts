import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { enviroment } from '../config';
import { rootReducer, rootSaga } from './root';

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares =
    enviroment === 'development' ? [sagaMiddleware, logger] : [sagaMiddleware];

  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  sagaMiddleware.run(rootSaga);
  return store;
}
