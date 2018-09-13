import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    subContainer: {
        margin: 10,
        marginLeft: 15
    },
    circle: {
        marginLeft: 10,
        width: 75,
        height: 75,
        borderRadius: 75 / 2,
        borderColor: AppStyles.color.COLOR_BLACK,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    notification: {
        marginBottom: 20,
        marginLeft: 10
    },
    headStyle: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: AppStyles.color.COLOR_WHITE,
        fontSize: 18
    },
    bodyStyle: {
        color: AppStyles.color.COLOR_BLUE,
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 15
    }
});

export default styles;
