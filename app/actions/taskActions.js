import * as types from './types';

export function requestTask() {
    
    return {
        type: types.TASK_REQUEST
    };
}
export function responseTask(data) {
    return {
        type: types.TASK_RESPONSE,
        data
    };
}

export function onFailedTask() {
    return {
        type: types.TASK_FAILED
    };
}
