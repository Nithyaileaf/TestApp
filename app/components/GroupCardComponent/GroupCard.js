import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

import { Card, Title, Paragraph } from 'react-native-paper';
export default class GroupCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Card style={styles.cardStyle}>
                <Card.Cover
                    source={{ uri: 'https://picsum.photos/700' }}
                    style={styles.cardCoverStyle}
                />
                <Title style={styles.titleStyle}>This is a card</Title>
                <Paragraph style={styles.subTitleStyle}>Card content</Paragraph>
            </Card>
        );
    }
}
GroupCard.propTypes = {
    navigation: PropTypes.object
};
