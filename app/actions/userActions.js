import * as types from './types';

export function requestUser() {
    return {
        type: types.USER_REQUEST
    };
}
export function responseUser(data) {
    return {
        type: types.USER_RESPONSE,
        data
    };
}

export function onFailedUser() {
    return {
        type: types.USER_FAILED
    };
}
