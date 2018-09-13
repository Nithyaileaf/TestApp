/* 
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as userReducer from './userReducer';
import * as taskReducer from './taskReducer';
import nav from './nav';
export default Object.assign(
    taskReducer,
    userReducer,
    loginReducer,
    loadingReducer,
    {
        nav
    }
);
