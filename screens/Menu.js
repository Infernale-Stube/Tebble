import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, menuStyles } from "../styles";
import { useNavigation } from '@react-navigation/native';

export default function Menu() {

  const navigation = useNavigation();

  const navigateToPlay = () => {
    navigation.navigate('Play');
  };

  const navigateToAbout = () => {
    navigation.navigate('About');
  };

  const navigateToSettings = () => {
    navigation.navigate('Settings');
  };

  const navigateToOverview = () => {
    navigation.navigate('Overview');
  };

  const navigateToHighscore = () => {
    navigation.navigate('Highscore');
  };

  return (
    <View style={globalStyles.container}>
      <View style={menuStyles.logoTitleContainer}>
        <Image source={require('../assets/icon.png')} style={menuStyles.logo} />
        <Text style={menuStyles.title}>Tebble</Text>
      </View>

      <View style={menuStyles.primaryButtonContainer}>
        <TouchableOpacity style={menuStyles.button} onPress={navigateToPlay}>
          <Text style={menuStyles.buttonText}>Play</Text>
        </TouchableOpacity>

        <TouchableOpacity style={menuStyles.button} onPress={navigateToOverview}>
          <Text style={menuStyles.buttonText}>Overview</Text>
        </TouchableOpacity>

        {/*
        <TouchableOpacity style={menuStyles.button} onPress={navigateToHighscore}>
          <Text style={menuStyles.buttonText}>Highscore</Text>
        </TouchableOpacity>*/}
      </View>

      <View style={menuStyles.secondaryButtonContainer}>
        <TouchableOpacity onPress={navigateToAbout}>
          <Ionicons name="information-circle" size={50} color="#FF5733" />
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToSettings}>
          <Ionicons name="settings" size={50} color="#FF5733" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
