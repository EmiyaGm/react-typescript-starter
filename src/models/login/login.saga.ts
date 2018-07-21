import { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { api_login } from '../../services';
import { TaskNames, startLoginTask } from './login.types';
import { login } from './login.action';

export function* startLoginSaga(action: startLoginTask): SagaIterator {
  const { username, password } = action;
  const res = yield call(api_login, username, password);
  yield put(login(res));
}

export function* watchLoginSagas() {
  yield all([takeLatest(TaskNames.START_LOGIN, startLoginSaga)]);
}
