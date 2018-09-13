import Api from '@api';
import ApiConstants from '../ApiConstants';

export default function detailsUser() {
    return Api(ApiConstants.BASE_URL + ApiConstants.USER, null, 'get', null);
}
