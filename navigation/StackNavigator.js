import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Menu, Settings, About } from "../screens"
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true}/>
      
      <Stack.Navigator>
        <Stack.Screen name="Menu" options={{ headerShown: false }} component={Menu} />
        <Stack.Screen name="Settings" options={{ headerShown: false }} component={Settings} />
        <Stack.Screen name="About" options={{ headerShown: false }} component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
