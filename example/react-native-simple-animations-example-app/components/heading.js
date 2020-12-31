import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Variables, scaledLineHeight, scaledValue } from '../config/variables';

const styles = StyleSheet.create({
  root: {
    marginBottom: Variables.spacer.base,
  },
  subTitle: {
    color: Variables.colors.white,
    fontFamily: Variables.fonts.sansSerif.black,
    fontSize: scaledValue(14),
    letterSpacing: scaledValue(10),
    lineHeight: scaledLineHeight(14),
    marginBottom: Variables.spacer.base / 2,
    textAlign: 'center',
  },
  title: {
    color: Variables.colors.white,
    fontFamily: Variables.fonts.sansSerif.thin,
    fontSize: scaledValue(56),
    letterSpacing: scaledValue(-2),
    lineHeight: scaledLineHeight(56),
    textAlign: 'center',
  },
});

export const Heading = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.subTitle}>REACT NATIVE</Text>
      <Text style={styles.title}>Simple Animations</Text>
    </View>
  );
};
