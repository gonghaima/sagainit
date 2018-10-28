import { delay } from 'redux-saga';
import { put, takeEvery, all, call } from 'redux-saga/effects';

export function* helloSaga() {
  console.log('Hello Sagas!');
}

export function* incrementAsync() {
  // use the call Effect
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' });
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync(), incrementAsync()]);
}
