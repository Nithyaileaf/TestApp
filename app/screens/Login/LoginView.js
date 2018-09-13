import React, { Component } from 'react';
import { View, Text, FlatList, Image, ScrollView } from 'react-native';
// import Toolbar from '../../components/Toolbar';
import CustomStatusBar from '../../components/CustomStatusBar';
import { Appbar } from 'react-native-paper';
import styles from './styles';
import GroupCard from '@components/GroupCardComponent';
import CardButton from '@components/CardButton';
import AppStyles from '../../config/styles';
import PropTypes from 'prop-types';
export default class LoginView extends Component {
    constructor(props) {
        super(props);
    }
    nav = item => {
        this.props.navigation.navigate('Details', { item });
    };
    renderItem = ({ item }) => {
        return <CardButton data={item} nav={() => this.nav(item)} />;
    };

    renderItemCard = () => {
        return <GroupCard nav={this.nav} />;
    };

    render() {
        return (
            <View style={styles.container}>
                <CustomStatusBar
                    backgroundColor={AppStyles.color.COLOR_PRIMARY}
                />
                <Appbar
                    style={{ backgroundColor: AppStyles.color.COLOR_PRIMARY }}
                >
                    <Appbar.Content
                        title=" Franklin"
                        style={styles.headStyle}
                    />
                </Appbar>
                <ScrollView contentContainerStyle={styles.subContainer}>
                    <Image
                        style={styles.circle}
                        source={{ uri: this.props.user.avatar }}
                    />

                    <Text style={styles.bodyStyle}>
                        Hi, {this.props.user.first_name},
                    </Text>
                    <Text style={styles.notification}>
                        You have {this.props.list.length} requests to catch up
                        today
                    </Text>

                    <FlatList
                        data={this.props.list}
                        renderItem={this.renderItem}
                        extraData={this.props}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                    <Text style={styles.notification}>
                        Here are some blog posts you may like to read
                    </Text>
                    <FlatList
                        data={this.props.list}
                        renderItem={this.renderItemCard}
                        extraData={this.props}
                        horizontal
                    />
                </ScrollView>
            </View>
        );
    }
}
LoginView.propTypes = {
    navigation: PropTypes.object,
    user: PropTypes.object,
    list: PropTypes.array
};
