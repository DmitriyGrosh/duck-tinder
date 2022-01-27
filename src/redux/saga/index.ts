import { all } from 'redux-saga/effects';

import { userWatcher } from './user';

export default function* rootSaga() {
  yield all([userWatcher()]);
}
