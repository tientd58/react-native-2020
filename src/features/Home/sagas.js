import {call, put, fork, takeEvery, all} from 'redux-saga/effects';

import {HOME} from './actionsType';
import {getTestFailure, getTestSuccess} from './actions';
import API from '_services/Api';

function* handleGetTest({payload}) {
  try {
    const {params} = payload;
    const res = yield call(API.get, '/users', {query: {page: 2}});
    yield put(getTestSuccess(res.data.data));
  } catch (error) {
    yield put(getTestFailure(error));
  }
}

function* watchGetTest() {
  yield takeEvery(HOME.GET_TEST_REQUEST, handleGetTest);
}

export default function* rootSaga() {
  yield all([fork(watchGetTest)]);
}
