import {all} from 'redux-saga/effects';
import HomeSagas from '_features/Home/State/sagas';

export default function* root() {
  yield all([HomeSagas()]);
}
