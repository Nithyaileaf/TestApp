import { createStackNavigator } from 'react-navigation';

import Login from '@screens/Login';
import Details from '@screens/Details';
const RNApp = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: { header: null, gesturesEnabled: false }
    },
    Details: {
        screen: Details,
        navigationOptions: { header: null, gesturesEnabled: false }
    }
});

export default RNApp;
