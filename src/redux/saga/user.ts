import { takeLatest, put } from 'redux-saga/effects';

import { ASYNC_SAVE_USER, saveUser } from '../actions/user';
import { IDataSga } from '../index';
import { IUser } from '../reducers/user';

function* workerUserLogin({ payload }: IDataSga<IUser>) {
  yield put(saveUser(payload));
  try {
  } catch (error) {
    console.log('==========>error', error);
  }
}

export function* userWatcher() {
  yield takeLatest(ASYNC_SAVE_USER, workerUserLogin);
}
