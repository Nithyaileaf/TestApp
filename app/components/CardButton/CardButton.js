import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

import { Card, Title, Paragraph, Text } from 'react-native-paper';
export default class CardButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    onPress = () => {
        this.props.nav();
    };
    render() {
        return (
            <Card style={styles.cardStyle} onPress={this.onPress}>
                <Card.Content style={styles.cardcontent}>
                    <Title style={styles.title}>{this.props.data.name}</Title>
                    <Paragraph>{this.props.data.subtitle}</Paragraph>
                </Card.Content>

                <Card.Actions style={styles.buttonStyle}>
                    <Text style={styles.tagOne}>Category</Text>

                    <Text style={styles.tagTwo}>Tag</Text>
                </Card.Actions>
            </Card>
        );
    }
}
CardButton.propTypes = {
    navigation: PropTypes.object,
    onPress: PropTypes.func,
    nav: PropTypes.func,
    data: PropTypes.object
};
