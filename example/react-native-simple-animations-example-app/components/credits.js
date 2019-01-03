import { Linking, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Variables, scaledLineHeight, scaledValue } from '../config/variables';

import React from 'react';

const styles = StyleSheet.create({
  name: {
    fontFamily: Variables.fonts.sansSerif.bold,
    textDecorationStyle: 'solid',
    textDecorationColor: Variables.colors.white,
    textDecorationLine: 'underline'
  },
  text: {
    color: Variables.colors.white,
    fontFamily: Variables.fonts.sansSerif.regular,
    fontSize: scaledValue(16),
    lineHeight: scaledLineHeight(16),
    textAlign: 'center'
  }
});

export const Credits = () => {
  const onPress = () => Linking.openURL('http://joeyschroeder.com/');

  return (
    <View>
      <TouchableWithoutFeedback onPress={onPress}>
        <View>
          <Text style={styles.text}>
            by <Text style={styles.name}>Joey Schroeder</Text>
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
