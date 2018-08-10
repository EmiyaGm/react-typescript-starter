import { combineReducers } from 'redux';
import { SagaIterator } from 'redux-saga';
import { routerReducer, RouterState } from 'react-router-redux';
import { all, fork } from 'redux-saga/effects';

import { IndexReducer, IndexState } from './index/index.reducer';
import { watchIndexSagas } from './index/index.saga';

import { TodoReducer, TodoState } from './todo/todo.reducer';

export type GlobalState = {
  index: IndexState;
  todo: TodoState;
  router: RouterState;
};

export const rootReducer = combineReducers<GlobalState>({
  index: IndexReducer,
  router: routerReducer,
  todo: TodoReducer
});

export function* rootSaga(): SagaIterator {
  yield all([fork(watchIndexSagas)]);
}
