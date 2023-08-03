
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
      <View style={menuStyles.logoTitleContainer}>
        <Image source={require('../assets/placeholder.png')} style={menuStyles.logo}/>
        <Text style={menuStyles.title}>Tebble</Text>
      </View>

      <View style={menuStyles.buttonContainer}>
        <TouchableOpacity style={menuStyles.button}>
        
          <Text style={[menuStyles.buttonText, { color: "#999" }]}>Campaign Mode</Text>
        </TouchableOpacity>

        <TouchableOpacity style={menuStyles.button}>
          <Text style={menuStyles.buttonText}>Random Mode</Text>
        </TouchableOpacity>

        <TouchableOpacity style={menuStyles.button}>
          <Text style={menuStyles.buttonText}>Highscore</Text>
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
