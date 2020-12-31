/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { StyleSheet, Text, View, ViewPropTypes } from 'react-native';
import Slider from '@react-native-community/slider';

import PropTypes from 'prop-types';
import Color from 'color';
import _ from 'lodash';
import { Variables, scaledLineHeight, scaledValue } from '../config/variables';

const styles = StyleSheet.create({
  label: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingRight: Variables.spacer.base / 4,
  },
  root: {
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  text: {
    fontFamily: Variables.fonts.sansSerif.bold,
    fontSize: scaledValue(14),
    lineHeight: scaledLineHeight(14),
  },
  textLarge: {
    fontFamily: Variables.fonts.sansSerif.regular,
    fontSize: scaledValue(24),
    lineHeight: scaledLineHeight(24),
  },
  value: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: Variables.spacer.base / 4,
  },
});

export class SliderSelector extends Component {
  static propTypes = {
    maxColor: PropTypes.string,
    minColor: PropTypes.string,
    displayValue: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    step: PropTypes.number,
    style: ViewPropTypes.style,
    textColor: PropTypes.string,
    value: PropTypes.number,
    maxValue: PropTypes.number,
    minValue: PropTypes.number,
  };

  static defaultProps = {
    maxColor: Color(Variables.colors.primary).darken(0.2).rgb().string(),
    minColor: Variables.colors.white,
    displayValue: '',
    label: '',
    onChange: () => {},
    step: 1,
    style: null,
    textColor: Variables.colors.white,
    value: 50,
    maxValue: 100,
    minValue: 0,
  };

  constructor(props) {
    super(props);

    const { onChange } = props;
    this.onChange = _.debounce(onChange, 150);
  }

  render() {
    const { displayValue, label, maxColor, maxValue, minColor, minValue, step, style, textColor, value } = this.props;

    return (
      <View style={[styles.root, style]}>
        {!!label && (
          <View style={[styles.label, { flex: 2 }]}>
            <Text style={[styles.text, { color: textColor }]}>{label}</Text>
          </View>
        )}
        <View style={{ flex: 5 }}>
          <Slider
            maximumTrackTintColor={maxColor}
            maximumValue={maxValue}
            minimumTrackTintColor={minColor}
            minimumValue={minValue}
            onValueChange={this.onChange}
            step={step}
            thumbTintColor={textColor}
            value={value}
          />
        </View>
        <View style={[styles.value, { flex: 2 }]}>
          <Text style={[styles.text, styles.textLarge, { color: textColor }]}>{displayValue || value}</Text>
        </View>
      </View>
    );
  }
}
