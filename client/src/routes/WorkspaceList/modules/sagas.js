import { call, all } from 'redux-saga/effects';

export function* helloSaga() {
  console.log('Hello Sagas!')
}

export default function* watchWorkspaceList() {
  yield all([
    yield call(helloSaga),
  ]);
};
