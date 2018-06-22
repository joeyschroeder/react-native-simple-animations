import { DIRECTIONS, MOVEMENT_TYPES, SimpleAnimation } from 'react-native-simple-animations';
import { Modal, Picker, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import React, { Component } from 'react';
import { Variables, scaledLineHeight, scaledValue } from '../config/variables';

import Color from 'color';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: Color(Variables.colors.black).fade(0.7),
        bottom: 0,
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0
    },
    picker: {
        backgroundColor: Variables.colors.white,
        bottom: 0,
        left: 0,
        position: 'absolute',
        right: 0
    },
    text: {
        fontFamily: Variables.fonts.sansSerif.regular,
        color: Variables.colors.blackType,
        fontSize: scaledValue(24),
        lineHeight: scaledLineHeight(24)
    }
});

export class PickerOverlay extends Component {

    getPickerItems = () => {
        const { options } = this.props;
        const result = [];

        options.forEach((option, index) => {
            result.push(
                <Picker.Item key={index} label={option} value={option} />
            );
        });

        return result;
    }

    render = () => {
        const { active, onChange, selectedValue, onClose, placeholderText } = this.props;
        const pickerItems = this.getPickerItems();

        return (
            <Modal animationType='fade' onRequestClose={onClose} transparent visible={active}>
                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={styles.overlay} />
                </TouchableWithoutFeedback>
                <SimpleAnimation
                    direction={DIRECTIONS.UP}
                    distance={300}
                    movementType={MOVEMENT_TYPES.SLIDE}
                    style={styles.picker}
                >
                    <Picker
                        itemStyle={styles.text}
                        mode='dialog'
                        onValueChange={onChange}
                        selectedValue={selectedValue}
                    >
                        {pickerItems}
                        <Picker.Item label={placeholderText} value={null} />
                    </Picker>
                </SimpleAnimation>
            </Modal>
        );
    }
}

PickerOverlay.defaultProps = {
    active: false,
    onChange: null,
    onClose: null,
    options: [],
    placeholderText: 'none',
    selectedValue: ''
};

PickerOverlay.propTypes = {
    active: PropTypes.bool,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string),
    placeholderText: PropTypes.string.isRequired,
    selectedValue: PropTypes.string
};
