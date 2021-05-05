import { fork, all } from 'redux-saga/effects';
import { sagas } from './../routers';

function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}

export default rootSaga;
