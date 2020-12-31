import { Animated, Easing, StyleSheet, Text, TouchableWithoutFeedback, View, ViewPropTypes } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Variables, scaledLineHeight, scaledValue } from '../config/variables';

const styles = StyleSheet.create({
  activeIndicator: {
    alignSelf: 'stretch',
    bottom: 0,
    flexDirection: 'row',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 0,
  },
  button: {
    backgroundColor: 'transparent',
    flexBasis: 0,
    flexGrow: 1,
    paddingVertical: Variables.spacer.base / 4,
    zIndex: 1,
  },
  root: {
    alignSelf: 'stretch',
    borderRadius: Variables.border.radius,
    borderWidth: Variables.border.width,
    flexDirection: 'row',
    overflow: 'hidden',
    position: 'relative',
  },
  text: {
    fontFamily: Variables.fonts.sansSerif.bold,
    fontSize: scaledValue(18),
    lineHeight: scaledLineHeight(18),
    textAlign: 'center',
  },
});

export class RadioSelector extends Component {
  static propTypes = {
    activeColor: PropTypes.string,
    onToggle: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string),
    style: ViewPropTypes.style,
    textColor: PropTypes.string,
    value: PropTypes.string,
  };

  static defaultProps = {
    activeColor: Variables.colors.white,
    onToggle: () => {},
    options: [],
    style: null,
    textColor: Variables.colors.primary,
    value: '',
  };

  constructor(props) {
    super(props);

    const { value, options } = props;
    this.animation = new Animated.Value(options.indexOf(value));
  }

  componentDidUpdate() {
    this.animate();
  }

  animate() {
    const { options, value } = this.props;

    Animated.timing(this.animation, {
      duration: 500,
      easing: Easing.out(Easing.exp),
      toValue: options.indexOf(value),
      useNativeDriver: false,
    }).start();
  }

  renderOptions() {
    const { textColor, activeColor, value, options, onToggle } = this.props;
    const result = [];

    options.forEach((option) => {
      const color = value === option ? textColor : activeColor;
      const textStyles = [styles.text, { color }];

      result.push(
        <TouchableWithoutFeedback key={option} onPress={() => onToggle(option)}>
          <View style={styles.button}>
            <Text ellipsizeMode="tail" numberOfLines={1} style={textStyles}>
              {option.toUpperCase()}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      );
    });

    return result;
  }

  render() {
    const { activeColor, style, options } = this.props;

    const flex = options ? 1 / options.length : 0;
    const interpolatedRange = flex * (options.length - 1);

    const spacerAfterFlex = this.animation.interpolate({
      inputRange: [0, options.length - 1],
      outputRange: [interpolatedRange, 0],
    });

    const spacerBeforeFlex = this.animation.interpolate({
      inputRange: [0, options.length - 1],
      outputRange: [0, interpolatedRange],
    });

    const spacerBeforeStyles = { flex: spacerBeforeFlex };
    const spacerAfterStyles = { flex: spacerAfterFlex };

    const activeStyles = { backgroundColor: activeColor, flex };
    const rootStyles = [style, styles.root, { borderColor: activeColor }];
    const renderedOptions = this.renderOptions();

    return (
      <View style={rootStyles}>
        {renderedOptions}
        <View style={styles.activeIndicator}>
          <Animated.View style={spacerBeforeStyles} />
          <Animated.View pointerEvents="none" style={activeStyles} />
          <Animated.View style={spacerAfterStyles} />
        </View>
      </View>
    );
  }
}
