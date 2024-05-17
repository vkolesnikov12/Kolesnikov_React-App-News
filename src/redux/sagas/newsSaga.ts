import { put, call, takeLatest } from 'redux-saga/effects';

import { NEWS_REQUESTED } from '../constants/actionTypes';
import { postsData } from '../api/post';
import { newsFailed, newsReceived } from '../actions/newsActions';

function* workSaga() {
  try {
    const { data } = yield call(postsData);
    yield put(newsReceived(data));
  } catch (error: unknown) {
    if(error instanceof Error){
      yield put(newsFailed(error.message));
    } else {
      const defaultError = new Error('unknown error');
      yield put(newsFailed(defaultError.message));
    };
  };
};

function* watchSaga() {
  yield takeLatest(NEWS_REQUESTED, workSaga);
};
export default watchSaga;