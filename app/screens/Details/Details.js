import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import AppStyles from '../../config/styles';
import CustomStatusBar from '../../components/CustomStatusBar';
import { Appbar } from 'react-native-paper';
import PropTypes from 'prop-types';
export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    _goBack = () => {
        this.props.navigation.goBack();
    };
    render() {
        const item = this.props.navigation.getParam('item');
        return (
            <View style={styles.container}>
                <CustomStatusBar
                    backgroundColor={AppStyles.color.COLOR_PRIMARY}
                />
                <Appbar.Header
                    style={{ backgroundColor: AppStyles.color.COLOR_PRIMARY }}
                >
                    <Appbar.BackAction onPress={this._goBack} />
                    <Appbar.Content title={item.name} />
                </Appbar.Header>

                <View style={styles.subContainer}>
                    <Text style={styles.titleStyle}>{item.subtitle}</Text>
                    <View style={styles.buttonStyle}>
                        <Text style={styles.tagOne}>Category</Text>
                        <Text style={styles.tagTwo}>Tag</Text>
                    </View>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </View>
        );
    }
}
Details.propTypes = {
    navigation: PropTypes.object
};
