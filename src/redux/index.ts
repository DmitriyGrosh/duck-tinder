import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducers/user';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  user: userReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface IDataSga<V> {
  type: string;
  payload: V;
}

sagaMiddleware.run(rootSaga);

export default store;
