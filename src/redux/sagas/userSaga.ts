import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { AnyAction } from 'redux'
import api from '../../services/Api'
import { actions as UserActions } from '../reducers/user'

export interface UserRequest {
  userId: string
}
// import axios from 'axios'
export function * user (api: any, action: AnyAction): any {
  try {
    const res = yield call(api, action.payload)
    if (res.error === null) {
      yield put(UserActions.userSuccess(res.data))
    } else {
      yield put(UserActions.userFailure(res.error))
    }
  } catch (error) {
    let errorMessage = 'Failed to do something exceptional'
    if (error instanceof Error) {
      errorMessage = error.message
    }
    yield put(UserActions.userFailure(errorMessage))
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_USER_REQUEST` action.
  Allows concurrent increments.
*/
function * userSaga (): any {
  yield all([takeLatest('user/userRequest', user, api.user)])
}

export default userSaga
