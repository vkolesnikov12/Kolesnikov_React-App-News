import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';


import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSagas';
import { useDispatch } from 'react-redux';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

sagaMiddleware.run(rootSaga);
export default store;

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<AppStore['getState']>;
