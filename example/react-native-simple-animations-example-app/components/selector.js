import React, { Component } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View, ViewPropTypes } from 'react-native';
import { Variables, scaledLineHeight, scaledValue } from '../config/variables';

import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    root: {
        alignSelf: 'stretch',
        borderColor: Variables.colors.white,
        borderRadius: Variables.border.radius,
        borderWidth: Variables.border.width,
        padding: Variables.spacer.base / 2,
        flexDirection: 'row'
    },
    value: {
        flex: 1
    },
    valueText: {
        color: Variables.colors.white,
        fontFamily: Variables.fonts.sansSerif.regular,
        fontSize: scaledValue(18),
        lineHeight: scaledLineHeight(18)
    }
});


export class Selector extends Component {

    render = () => {
        const { onPress, placeholderText, style, value } = this.props;

        const iconSize = scaledValue(18);
        const iconColor = Variables.colors.white.string();
        const rootStyle = [ styles.root, style ];

        const displayValue = value || placeholderText;

        return (
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={rootStyle}>
                    <View style={styles.value}>
                        <Text style={styles.valueText}>{displayValue}</Text>
                    </View>
                    <View>
                        <Ionicons name='ios-arrow-down' size={iconSize} color={iconColor} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

Selector.defaultProps = {
    onPress: null,
    placeholderText: 'Select a value...',
    style: null,
    value: 'Value'
};

Selector.propTypes = {
    onPress: PropTypes.func,
    placeholderText: PropTypes.string,
    style: ViewPropTypes.style,
    value: PropTypes.string
};

