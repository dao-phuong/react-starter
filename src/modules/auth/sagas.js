import { takeEvery, call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as api from './api';
import * as types from './types';

function* handleLogin(action) {
  try {
    const { userId, password } = action.payload;
    // const result = yield call(api.loginRequest, { userId, password });
    const result = yield api.loginRequest({ userId, password })

    yield put(actions.loginSucess({ result: result }))
  } catch (e) {
    yield put(action.loginError());
  }
}

function* appSaga() {
  yield all([
    takeLatest(types.LOGIN_REQUEST, handleLogin),
  ]);
}

export default appSaga;