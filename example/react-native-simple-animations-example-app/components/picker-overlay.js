import { DIRECTIONS, MOVEMENT_TYPES, SimpleAnimation } from 'react-native-simple-animations';
import { Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, { Component } from 'react';

import Color from 'color';
import PropTypes from 'prop-types';
import { Variables, scaledLineHeight, scaledValue } from '../config/variables';

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: Color(Variables.colors.black).fade(0.7).rgb().string(),
    bottom: 0,
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  picker: {
    backgroundColor: Variables.colors.white,
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
  },
  text: {
    color: Variables.colors.blackType,
    fontFamily: Variables.fonts.sansSerif.regular,
    fontSize: scaledValue(24),
    lineHeight: scaledLineHeight(24),
  },
});

export class PickerOverlay extends Component {
  static propTypes = {
    active: PropTypes.bool,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string),
    placeholderText: PropTypes.string,
    selectedValue: PropTypes.string,
  };

  static defaultProps = {
    active: false,
    onChange: null,
    onClose: null,
    options: [],
    placeholderText: 'none',
    selectedValue: '',
  };

  getPickerItems() {
    const { options } = this.props;
    const result = [];

    options.forEach((option, index) => {
      // eslint-disable-next-line react/no-array-index-key
      result.push(<Picker.Item key={index} label={option} value={option} />);
    });

    return result;
  }

  render() {
    const { active, onChange, selectedValue, onClose, placeholderText } = this.props;
    const pickerItems = this.getPickerItems();

    return (
      <Modal animationType="fade" onRequestClose={onClose} transparent visible={active}>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
        <SimpleAnimation
          direction={DIRECTIONS.UP}
          distance={300}
          movementType={MOVEMENT_TYPES.SLIDE}
          style={styles.picker}
        >
          <Picker itemStyle={styles.text} mode="dialog" onValueChange={onChange} selectedValue={selectedValue}>
            {pickerItems}
            <Picker.Item label={placeholderText} value={null} />
          </Picker>
        </SimpleAnimation>
      </Modal>
    );
  }
}
