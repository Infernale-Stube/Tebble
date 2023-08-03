
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { globalStyles, menuStyles } from "../styles"
import { useNavigation } from '@react-navigation/native';

export default function Menu() {
  
  const navigation = useNavigation();

  const navigateToAbout = () => {
    navigation.navigate('About');
  };

  const navigateToSettings = () => {
    navigation.navigate('Settings');
  };
  
  return (
    <View style={globalStyles.container}>
      <View style={menuStyles.logoContainer}>
        <Image source={require('../assets/icon.png')} style={menuStyles.logo}/>
      </View>

      <View style={menuStyles.buttonContainer}>
        <TouchableOpacity style={menuStyles.button}>
        
          <Text style={menuStyles.buttonText}>Campaign Mode</Text>
        </TouchableOpacity>

        <TouchableOpacity style={menuStyles.button}>
          <Text style={menuStyles.buttonText}>Random Mode</Text>
        </TouchableOpacity>

        <TouchableOpacity style={menuStyles.button} onPress={navigateToAbout}>
          <Text style={menuStyles.buttonText}>About</Text>
        </TouchableOpacity>

        <TouchableOpacity style={menuStyles.button} onPress={navigateToSettings}>
          <Text style={menuStyles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
