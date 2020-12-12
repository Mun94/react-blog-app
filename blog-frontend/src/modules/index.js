import { combineReducers } from 'redux';
import auth, { authSaga } from './auth.js';
import user, { userSaga } from './user.js';
import loading from './loading.js';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  auth,
  user,
  loading,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}

export default rootReducer;
