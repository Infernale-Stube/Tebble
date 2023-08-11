import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { globalStyles, campaignStyles, menuStyles } from '../styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setInitialLevel } from '../functions/levelStorage';

export default function Campaign() {
  const navigation = useNavigation();
  const [currentLevel, setCurrentLevel] = useState(1);

  const navigateToPlay = () => {
    navigation.navigate('Play');
  };

  useEffect(() => {
    const fetchCurrentLevel = async () => {
      try {
        await setInitialLevel();

        const storedLevel = await AsyncStorage.getItem('currentLevel');
        if (storedLevel !== null) {
          setCurrentLevel(parseInt(storedLevel, 10));
        }
      } catch (error) {
        console.error('Error fetching current level:', error);
      }
    };

    fetchCurrentLevel();
  }, []);

  const handleLevelButtonPress = (level) => {
    if (level <= currentLevel) {
      navigation.navigate('LevelNavigator', { screen: `Level${level}` });
    } else {
      console.log(`Level ${level} is locked.`);
    }
  };

  const renderLevelButtons = () => {
    const buttons = [];
    const numRows = 25;
    const numCols = 4;

    for (let row = 1; row <= numRows; row++) {
      const rowButtons = [];
      for (let col = 1; col <= numCols; col++) {
        const level = (row - 1) * numCols + col;
        const isDisabled = level > currentLevel;
        rowButtons.push(
          <TouchableOpacity
            key={level}
            style={[
              campaignStyles.levelButton,
              isDisabled && campaignStyles.disabledButton,
            ]}
            onPress={() => handleLevelButtonPress(level)}
            disabled={isDisabled}>
            <Text
              style={[
                campaignStyles.levelButtonText,
                isDisabled && campaignStyles.disabledButtonText,
              ]}>
              {level}
            </Text>
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

      <View style={campaignStyles.headlineContainer}>
        <Text style={campaignStyles.headline}>Campaign Overview</Text>
      </View>

      <View style={campaignStyles.scrollViewContainer}>
        <ScrollView style={campaignStyles.scrollViewContent}>
          {renderLevelButtons()}
        </ScrollView>
      </View>

      <View style={campaignStyles.bottomButtonContainer}>
        <TouchableOpacity onPress={navigateToPlay}>
          <Ionicons name="arrow-back" size={50} color="#FF5733" />
        </TouchableOpacity>
      </View>
    </View>
  );

}
