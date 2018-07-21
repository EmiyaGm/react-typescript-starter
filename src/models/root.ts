import { combineReducers } from 'redux';
import { SagaIterator } from 'redux-saga';
import { routerReducer, RouterState } from 'react-router-redux';
import { all, fork } from 'redux-saga/effects';

import { IndexReducer, IndexState } from './index/index.reducer';
import { watchIndexSagas } from './index/index.saga';

import { LoginReducer, LoginState } from './login/login.reducer';
import { watchLoginSagas } from './login/login.saga';

export type GlobalState = {
  index: IndexState;
  login: LoginState;
  router: RouterState;
};

export const rootReducer = combineReducers<GlobalState>({
  index: IndexReducer,
  login: LoginReducer,
  router: routerReducer
});

export function* rootSaga(): SagaIterator {
  yield all([fork(watchIndexSagas), fork(watchLoginSagas)]);
}
