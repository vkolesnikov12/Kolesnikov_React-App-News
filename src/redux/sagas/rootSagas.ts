import { all } from 'redux-saga/effects';

import watchSaga from './newsSaga';

function* rootSaga() {
  yield all([
    watchSaga(),
  ]);
};

export default rootSaga;
