import { put, call, takeLatest } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import { POSTS_REQUESTED } from '../constants/actionTypes';
import { postsData } from '../api/post';
import { postsFailed, postsReceived } from '../actions/postsActions';
import { DEFAULT_MESSAGE } from '../constants/constants';

function* workSagaPosts() {
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

function* watchSagaPosts() {
  yield takeLatest(POSTS_REQUESTED, workSagaPosts);
};
export default watchSagaPosts;
