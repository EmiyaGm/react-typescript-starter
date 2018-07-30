import { delay } from 'redux-saga';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { addCount, substractCount } from './index.action';
import { TaskNames, addTask, substractTask } from './index.types';

export function* addSaga(action: addTask) {
  const { payload } = action;
  yield call(delay, 3000);
  yield put(addCount(payload));
}

export function* substractSaga(action: substractTask) {
  const { payload } = action;
  yield call(delay, 4000);
  yield put(substractCount(payload));
}

export function* watchIndexSagas() {
  yield all([
    takeEvery(TaskNames.ADD_TASK, addSaga),
    takeEvery(TaskNames.SUBSTRACT_TASK, substractSaga)
  ]);
}
