import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Menu, Settings, About, Overview, Highscore, Game, Campaign } from "../screens";
import { StatusBar } from 'expo-status-bar';

const levelScreens = require('../screens/levels');
const Stack = createNativeStackNavigator();

function LevelNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {Object.keys(levelScreens).map(levelName => (
        <Stack.Screen key={levelName} name={levelName} component={levelScreens[levelName]} />
      ))}
    </Stack.Navigator>
  );
}

function StackNavigator() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true}/>
      
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Highscore" component={Highscore} />
        <Stack.Screen name="Overview" component={Overview} />
        <Stack.Screen name="Campaign" component={Campaign} />
        
        <Stack.Screen name="LevelNavigator" component={LevelNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
