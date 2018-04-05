import { all } from 'redux-saga/effects';

import workspaceList from '../routes/WorkspaceList/modules/sagas';

export default function* rootSaga() {
  yield all([
    workspaceList(),
  ]);
}
