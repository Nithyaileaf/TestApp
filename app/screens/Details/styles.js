import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subContainer: {
        margin: 20,
        marginLeft: 15
    },
    tagOne: {
        paddingHorizontal: 5,
        backgroundColor: AppStyles.color.COLOR_BLUE,
        borderRadius: 5,
        height: 25,
        color: AppStyles.color.WHITE,
        textAlign: 'center',
        marginTop: 10
    },
    tagTwo: {
        backgroundColor: AppStyles.color.COLOR_PINK,
        borderRadius: 5,
        height: 25,
        color: AppStyles.color.WHITE,
        textAlign: 'center',
        paddingHorizontal: 5,
        marginTop: 10
    },
    buttonStyle: {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-around',
        marginBottom: 20
    },
    titleStyle: {
        color: AppStyles.color.COLOR_PRIMARY,
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 15
    },
    description: { textAlign: 'left', marginLeft: 20 }
});

export default styles;
