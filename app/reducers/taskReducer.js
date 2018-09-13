/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from '@lib/createReducer';
import * as types from '@actions/types';

const initialState = {
    task: []
};

export const taskReducer = createReducer(initialState, {
    [types.TASK_RESPONSE](state, action) {
        return { ...state, task: action.data };
    }
});
