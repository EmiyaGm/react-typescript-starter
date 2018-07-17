import { combineReducers } from 'redux';
import { SagaIterator } from 'redux-saga';
import { routerReducer, RouterState } from 'react-router-redux';
import { all, fork } from 'redux-saga/effects';
import { demoReducer, DemoState } from './demo/demo.reducer';
import { demoRootSagas } from './demo/demo.sagas';

export type GlobalState = {
  demo: DemoState;
  router: RouterState;
};

export const rootReducer = combineReducers<GlobalState>({
  demo: demoReducer,
  router: routerReducer
});

export function* rootSaga(): SagaIterator {
  yield all([fork(demoRootSagas)]);
}
