import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { demo, DemoState } from './demo/demo.reducer';
import { demoRootSaga } from './demo/demo.sagas';

export type GlobalState = {
  demo: DemoState
};

export const rootReducer = combineReducers({ demo });


export function* rootSaga(): IterableIterator<any> {
  yield all([
    demoRootSaga()
  ]);
}