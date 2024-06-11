import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosError } from 'axios';
import { SagaIterator } from 'redux-saga';

import { VERIFY_USER } from '../constants/actionTypes';
import { profileData } from '../api/profile';
import { loginFailed, loginSuccess } from '../actions/loginActions';
import { DEFAULT_MESSAGE } from '../constants/constants';

function* workProfileSaga(): SagaIterator {
  const token = localStorage.getItem('token');
  if(token) {
    try {
      const res = yield call(profileData);
      yield put(loginSuccess(res.data));
    } catch(err: unknown) {
      const currentError = err instanceof AxiosError
        ? err.response?.data.message
        : DEFAULT_MESSAGE;
      localStorage.removeItem('token');
      yield put(loginFailed(currentError));
    }
  }
}

function* watchProfileSaga() {
  yield takeLatest(VERIFY_USER, workProfileSaga);
}
export default watchProfileSaga;
