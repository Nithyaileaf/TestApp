/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from '@lib/createReducer';
import * as types from '@actions/types';

const initialState = {
    user: {}
};

export const userReducer = createReducer(initialState, {
    [types.USER_RESPONSE](state, action) {
        return { ...state, user: action.data };
    }
});
