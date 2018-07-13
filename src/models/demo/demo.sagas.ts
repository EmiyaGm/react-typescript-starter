import { delay, SagaIterator } from 'redux-saga';
import { call, fork, put, take } from 'redux-saga/effects';
import { ActionTypes } from './demo.types';

export function* increaseAsync(): SagaIterator {
  while (true) {
    yield take(ActionTypes.INCREMENT_ASYNC);
    yield call(delay, 1000);
    yield put({ type: ActionTypes.INCREMENT });
  }
}

export function* addAsync(): SagaIterator {
  while (true) {
    const { payload } = yield take(ActionTypes.ADD_ASYNC);
    yield put({ type: ActionTypes.ADD, payload });
  }
}

export function* demoRootSagas(): SagaIterator {
  yield [
    fork(increaseAsync),
    fork(addAsync)
  ];
}
