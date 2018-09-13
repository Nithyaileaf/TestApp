/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call } from 'redux-saga/effects';

import getTasks from '@api/methods/getTasks';
import * as taskActions from '@actions/taskActions';

export const getNetworkState = state => {
    return {
        isConnected: state.network.isConnected
    };
};

// Our worker Saga that logins the user
export default function* fetchUser(action) {
    try {
        const tasks = yield call(getTasks);
        // console.log('FetchContact called in contactSaga', tasks);
        yield put(taskActions.responseTask(tasks.data));
    } catch (error) {
        // console.log('FetchContact called', error);
        //yield put({ type: types.FETCH_FAILED, error });
    }
}
