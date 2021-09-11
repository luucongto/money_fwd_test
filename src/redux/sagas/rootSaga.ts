import { all, fork } from 'redux-saga/effects'
import userSaga from './userSaga'
export default function * rootSaga (): any {
  yield all([fork(userSaga)])
}
