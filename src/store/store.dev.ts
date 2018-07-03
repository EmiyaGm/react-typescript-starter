import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from '../redux';

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(logger)
);

export default store;