import { all } from 'redux-saga/effects';

import watchSagaPosts from './postsSaga';
import watchFormSaga from './formSaga';

function* rootSaga() {
  yield all([
    watchSagaPosts(),
    watchFormSaga(),
  ]);
};

export default rootSaga;
