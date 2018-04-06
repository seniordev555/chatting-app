import { all } from 'redux-saga/effects';

import workspace from '../routes/Workspace/modules/sagas';

export default function* rootSaga() {
  yield all([
    workspace(),
  ]);
}
