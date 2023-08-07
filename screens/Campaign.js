import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from '../styles';
import { useNavigation } from '@react-navigation/core';

const Campaign = () => {

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
            style={styles.levelButton}
            onPress={() => handleLevelButtonPress(level)}>
            <Text style={styles.levelButtonText}>{level}</Text>
          </TouchableOpacity>
        );
      }
      buttons.push(
        <View key={row} style={styles.row}>
          {rowButtons}
        </View>
      );
    }

    return buttons;
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {renderLevelButtons()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollViewContent: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  levelButton: {
    width: 60,
    height: 60,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  levelButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Campaign;
