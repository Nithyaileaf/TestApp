/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call, select } from 'redux-saga/effects';

import detailsUser from '@api/methods/detailsUser';
import * as userActions from '@actions/userActions';

export const getNetworkState = state => {
    return {
        isConnected: state.network.isConnected
    };
};

// Our worker Saga that logins the user
export default function* fetchUser(action) {
    try {
        const recContacts = yield call(detailsUser);
        // console.log('FetchContact called in contactSaga', recContacts);
        yield put(userActions.responseUser(recContacts.data));
    } catch (error) {
        // console.log('FetchContact called', error);
        //yield put({ type: types.FETCH_FAILED, error });
    }
}
