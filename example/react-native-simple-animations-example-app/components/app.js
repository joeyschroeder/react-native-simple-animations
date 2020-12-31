import { AIMS, DIRECTIONS, MOVEMENT_TYPES, STATIC_TYPES, SimpleAnimation } from 'react-native-simple-animations';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Constants from 'expo-constants';
import { Credits } from './credits';
import { Heading } from './heading';
import { PickerOverlay } from './picker-overlay';
import { RadioSelector } from './radio-selector';
import { Selector } from './selector';
import { SliderSelector } from './slider-selector';
import { Variables } from '../config/variables';

const styles = StyleSheet.create({
  option: {
    marginBottom: Variables.spacer.base / 2,
  },
  root: {
    alignItems: 'center',
    backgroundColor: Variables.colors.primary,
    flex: 1,
    justifyContent: 'center',
    paddingBottom: Variables.spacer.base,
    paddingHorizontal: Variables.spacer.base / 2,
    paddingTop: Variables.spacer.base + Constants.statusBarHeight,
  },
});

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      aim: AIMS.IN,
      delay: 500,
      direction: null,
      directionPickerActive: false,
      distance: 500,
      duration: 3000,
      friction: 5,
      movementType: null,
      movementTypePickerActive: false,
      staticType: STATIC_TYPES.BOUNCE,
      staticTypePickerActive: false,
    };
  }

  setValueToState = (key, value) => {
    this.setState({ [key]: value });
  };

  render = () => {
    const {
      aim,
      delay,
      direction,
      directionPickerActive,
      distance,
      duration,
      friction,
      movementType,
      movementTypePickerActive,
      staticType,
      staticTypePickerActive,
    } = this.state;

    const animateOnUpdate = !staticTypePickerActive && !directionPickerActive && !movementTypePickerActive;

    const onAimToggle = (value) => this.setValueToState('aim', value);

    const onMovementTypePickerToggle = () =>
      this.setValueToState('movementTypePickerActive', !movementTypePickerActive);
    const onMovementTypeToggle = (value) => this.setValueToState('movementType', value);

    const onDirectionPickerToggle = () => this.setValueToState('directionPickerActive', !directionPickerActive);
    const onDirectionToggle = (value) => this.setValueToState('direction', value);

    const onStaticTypePickerToggle = () => this.setValueToState('staticTypePickerActive', !staticTypePickerActive);
    const onStaticTypeToggle = (value) => this.setValueToState('staticType', value);

    const onDistanceChange = (value) => this.setValueToState('distance', value);
    const onDurationChange = (value) => this.setValueToState('duration', value);
    const onFrictionChange = (value) => this.setValueToState('friction', value);

    const staticTypes = Object.values(STATIC_TYPES);
    const directionOptions = Object.values(DIRECTIONS);
    const aimOptions = Object.values(AIMS);
    const movementTypes = Object.values(MOVEMENT_TYPES);

    return (
      <View style={styles.root}>
        <SimpleAnimation
          aim={aim}
          animateOnUpdate={animateOnUpdate}
          delay={delay}
          direction={direction}
          distance={distance}
          duration={duration}
          friction={friction}
          movementType={movementType}
          staticType={staticType}
        >
          <Heading />
        </SimpleAnimation>
        <RadioSelector onToggle={onAimToggle} options={aimOptions} style={styles.option} value={aim} />
        <Selector
          onPress={onMovementTypePickerToggle}
          placeholderText="Select a movement type..."
          style={styles.option}
          value={movementType}
        />
        <Selector
          onPress={onDirectionPickerToggle}
          placeholderText="Select a direction..."
          style={styles.option}
          value={direction}
        />
        <Selector
          onPress={onStaticTypePickerToggle}
          placeholderText="Select a static type..."
          style={styles.option}
          value={staticType}
        />
        <SliderSelector
          label="Duration"
          maxValue={6000}
          minValue={0}
          onChange={onDurationChange}
          step={100}
          value={duration}
        />
        <SliderSelector
          label="Distance"
          maxValue={1000}
          minValue={0}
          onChange={onDistanceChange}
          step={100}
          value={distance}
        />
        <SliderSelector
          label="Friction"
          maxValue={10}
          minValue={0}
          onChange={onFrictionChange}
          step={1}
          style={styles.option}
          value={friction}
        />
        <Credits />
        <PickerOverlay
          active={movementTypePickerActive}
          onChange={onMovementTypeToggle}
          onClose={onMovementTypePickerToggle}
          options={movementTypes}
          selectedValue={movementType}
        />
        <PickerOverlay
          active={directionPickerActive}
          onChange={onDirectionToggle}
          onClose={onDirectionPickerToggle}
          options={directionOptions}
          selectedValue={direction}
        />
        <PickerOverlay
          active={staticTypePickerActive}
          onChange={onStaticTypeToggle}
          onClose={onStaticTypePickerToggle}
          options={staticTypes}
          selectedValue={staticType}
        />
      </View>
    );
  };
}
