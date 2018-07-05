import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from './demo.types';

export function* increaseAsync(): IterableIterator<any> {
  yield delay(1000);
  yield put({ type: ActionTypes.INCREMENT });
}

export function* demoRootSaga(): IterableIterator<any> {
  yield takeEvery(ActionTypes.INCREMENT_ASYNC, increaseAsync);
}