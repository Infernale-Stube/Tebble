import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles, campaignStyles } from '../styles';
import { useNavigation } from '@react-navigation/core';

export default function Campaign() {

  const navigation = useNavigation();

  const handleLevelButtonPress = (level) => {
    if (level <= 2) {
      navigation.navigate('LevelNavigator', { screen: `Level${level}` });
    } else {
      console.log(`Level ${level} does not exist.`);
    }
  };

  const renderLevelButtons = () => {
    const buttons = [];
    const numRows = 20;
    const numCols = 5;

    for (let row = 1; row <= numRows; row++) {
      const rowButtons = [];
      for (let col = 1; col <= numCols; col++) {
        const level = (row - 1) * numCols + col;
        rowButtons.push(
          <TouchableOpacity
            key={level}
            style={campaignStyles.levelButton}
            onPress={() => handleLevelButtonPress(level)}>
            <Text style={campaignStyles.levelButtonText}>{level}</Text>
          </TouchableOpacity>
        );
      }
      buttons.push(
        <View key={row} style={campaignStyles.row}>
          {rowButtons}
        </View>
      );
    }

    return buttons;
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView contentContainerStyle={campaignStyles.scrollViewContent}>
        {renderLevelButtons()}
      </ScrollView>
    </View>
  );
};