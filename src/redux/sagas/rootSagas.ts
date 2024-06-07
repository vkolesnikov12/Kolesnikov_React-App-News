import { all } from 'redux-saga/effects';

import watchSagaPosts from './postsSaga';
import watchFormSaga from './formSaga';
import watchProfileSaga from './profileSaga';

function* rootSaga() {
  yield all([
    watchSagaPosts(),
    watchFormSaga(),
    watchProfileSaga(),
  ]);
};

export default rootSaga;
