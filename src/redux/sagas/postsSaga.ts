import { put, call, takeLatest } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import { POSTS_REQUESTED } from '../constants/actionTypes';
import { postsData } from '../api/post';
import { postsFailed, postsReceived } from '../actions/postsActions';
import { DEFAULT_MESSAGE } from '../constants/constants';

function* workSaga() {
  try {
    const { data } = yield call(postsData);
    yield put(postsReceived(data));
  } catch (error: unknown) {
    const currentError = error instanceof AxiosError
    ? error.message
    : DEFAULT_MESSAGE;
    yield put(postsFailed(currentError));
  };
};

function* watchSaga() {
  yield takeLatest(POSTS_REQUESTED, workSaga);
};
export default watchSaga;
