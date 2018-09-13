/**
 *  Redux saga class init
 */
import { takeEvery, all, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import userSaga from './userSaga';
import taskSaga from './getTasksSaga';
export default function* watch() {
    yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)]);
    yield all([takeLatest(types.USER_REQUEST, userSaga)]);
    yield all([takeLatest(types.TASK_REQUEST, taskSaga)]);
}
