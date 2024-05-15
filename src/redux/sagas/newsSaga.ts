import { put, takeEvery } from 'redux-saga/effects';

import { NEWS_RECEIVED } from '../constants/actionTypes';
import { postsData } from '../api/post';
import { Post } from '../../types';

function* workSaga() {
  try {
    const data: Post[] = yield postsData();
    yield put({type: NEWS_RECEIVED, payload: data});
  } catch (error) {
    console.error(error);
  }
}

function* watchSaga() {
  yield takeEvery('GET_POST', workSaga);
}
export default watchSaga;