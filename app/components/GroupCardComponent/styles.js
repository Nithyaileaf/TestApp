import { StyleSheet } from 'react-native';
import Metrics from '../../config/metrics';

const styles = StyleSheet.create({
    cardStyle: {
        borderRadius: 8,
        width: (Metrics.screenWidth - 48) / 2,
        height: (Metrics.screenHeight - 48) / 4,

        margin: 10
    },
    cardCoverStyle: {
        width: (Metrics.screenWidth - 48) / 2,
        height: ((Metrics.screenHeight - 48) * 0.8) / 6
    },
    titleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 14
    },
    subTitleStyle: {
        textAlign: 'center',
        fontSize: 14
    },
    buttonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 2
    }
});
export default styles;
