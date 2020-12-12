import { combineReducers } from 'redux';
import auth, { authSaga } from './auth.js';
import loading from './loading.js';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  auth,
  loading,
});

export function* rootSaga() {
  yield all([authSaga()]);
}

export default rootReducer;
