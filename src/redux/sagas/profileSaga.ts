import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosError } from 'axios';
import { SagaIterator } from 'redux-saga';

import { INITIALIZE_AUTH } from '../constants/actionTypes';
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
  } else {
    yield put(loginFailed('No token'));
  }
}

function* watchProfileSaga() {
  yield takeLatest(INITIALIZE_AUTH, workProfileSaga);
}
export default watchProfileSaga;
