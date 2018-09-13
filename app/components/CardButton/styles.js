import { StyleSheet } from 'react-native';
import Metrics from '../../config/metrics';
import AppStyles from '../../config/styles';
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
    cardcontent: { padding: 0, marginBottom: 15 },
    title: { fontSize: 15, fontWeight: 'bold' },
    buttonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 2,
        margin: 10
    },
    tagOne: {
        paddingHorizontal: 5,
        backgroundColor: AppStyles.color.COLOR_BLUE,
        borderRadius: 5,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 11,
        color: AppStyles.color.WHITE,
        textAlign: 'center'
    },
    tagTwo: {
        paddingHorizontal: 5,
        backgroundColor: AppStyles.color.COLOR_PINK,
        borderRadius: 5,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        fontSize: 11,
        color: AppStyles.color.WHITE,
        textAlign: 'center'
    }
});
export default styles;
