import { call, put, select, takeLatest } from 'redux-saga/effects';
import { AxiosError } from 'axios';
import { SagaIterator } from 'redux-saga';

import { LOGIN_REQUEST } from '../constants/actionTypes';
import { formData } from '../api/form';
import { DEFAULT_MESSAGE } from '../constants/constants';
import { closeModal } from '../actions/modalActions';
import { FormAction } from '../../types';
import { loginFailed, loginSuccess } from '../actions/loginActions';

function* workerFormSaga({ payload }: FormAction): SagaIterator {
  const mySelect = yield select(state => state.modal.modalType );
  const auth = mySelect === 'register' ? '/auth/register' : '/auth/login';
  try {
    const res = yield call(formData, payload, auth);
    yield put(closeModal());
    const { token, user } = res.data;
    if(token) {
      localStorage.setItem('token', token);
    }
    yield put(loginSuccess(user));
  } catch (err: unknown) {
    const currentError  = err instanceof AxiosError 
      ? err.response?.data.message
      : DEFAULT_MESSAGE;
    yield put(loginFailed(currentError));
  } 
}

function* watchFormSaga() {
  yield takeLatest(LOGIN_REQUEST, workerFormSaga);
}

export default watchFormSaga;
