import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles, aboutStyles } from '../styles'

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text>About Screen</Text>
    </View>
  );
}