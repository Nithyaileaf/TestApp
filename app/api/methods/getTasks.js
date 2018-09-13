import Api from '@api';
import ApiConstants from '../ApiConstants';

export default function detailsUser() {
    return Api(ApiConstants.BASE_URL + ApiConstants.TASKS, null, 'get', null);
}
