import { delay, SagaIterator } from 'redux-saga';
import { call, fork, put, take, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './demo.types';

export function* increaseAsync(): SagaIterator {
  yield call(delay, 1000);
  yield put({ type: ActionTypes.INCREMENT });
}

export function* addAsync(count: number): SagaIterator {
  yield call(delay, 1000);
  yield put({ type: ActionTypes.ADD, payload: count });
}

export function* demoRootSaga(): IterableIterator<any> {
  yield takeLatest(ActionTypes.INCREMENT_ASYNC, increaseAsync);
  const { payload } = yield take(ActionTypes.ADD_ASYNC);
  yield fork(addAsync, payload);
}
