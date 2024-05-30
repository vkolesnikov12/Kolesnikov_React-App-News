import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import { SET_FORM_DATA } from '../constants/actionTypes';
import { setFormDataFailed, setFormDataSuccess } from '../actions/formActions';
import { formData } from '../api/form';
import { DEFAULT_MESSAGE } from '../constants/constants';
import { closeModal } from '../actions/modalActions';

function* workerFormSaga({ payload }) {
  try {
    const res = yield call(formData, payload);
    if (res.status === 200) {
      yield put(setFormDataSuccess(res.data));
    } else {
      yield put(setFormDataFailed(res.data));
    }
    yield put(closeModal());
  } catch (err: unknown) {
    const currentError  = err instanceof AxiosError 
      ? err.response.data.message
      : DEFAULT_MESSAGE;
    yield put(setFormDataFailed(currentError));
    console.log(currentError);
  }
  
}

function* watchFormSaga() {
  yield takeLatest(SET_FORM_DATA, workerFormSaga);
}

export default watchFormSaga;
