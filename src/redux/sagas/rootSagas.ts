import { all } from 'redux-saga/effects';

import watchSaga from './postsSaga';

function* rootSaga() {
  yield all([
    watchSaga(),
  ]);
};

export default rootSaga;
