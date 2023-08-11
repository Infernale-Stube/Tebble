import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, menuStyles } from "../styles";
import { useNavigation } from '@react-navigation/native';

export default function Play() {

  const navigation = useNavigation();

  const navigateToCampaign = () => {
    navigation.navigate('Campaign');
  };

  const navigateToChallenge = () => {
    navigation.navigate('Game');
  };

  const navigateToMenu = () => {
    navigation.navigate('Menu');
  };

  return (
    <View style={globalStyles.container}>
      <View style={menuStyles.logoTitleContainer}>
        <Image source={require('../assets/icon.png')} style={menuStyles.logo} />
        <Text style={menuStyles.title}>Tebble</Text>
      </View>

      <View style={menuStyles.primaryButtonContainer}>
        <TouchableOpacity style={menuStyles.button} onPress={navigateToCampaign}>
          <Text style={menuStyles.buttonText}>Campaign</Text>
        </TouchableOpacity>

        {/*
        <TouchableOpacity style={menuStyles.button} onPress={navigateToChallenge}>
          <Text style={menuStyles.buttonText}>Challenge</Text>
        </TouchableOpacity>*/}
      </View>

      <View style={menuStyles.secondaryButtonContainer}>
        <TouchableOpacity onPress={navigateToMenu}>
          <Ionicons name="arrow-back" size={50} color="#FF5733" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
