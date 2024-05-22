import { all } from 'redux-saga/effects';

import watchSagaPosts from './postsSaga';

function* rootSaga() {
  yield all([
    watchSagaPosts(),
  ]);
};

export default rootSaga;
