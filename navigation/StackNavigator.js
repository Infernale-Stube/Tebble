import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Menu, Settings, About } from "../screens"

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" options={{ headerShown: false }} component={Menu}></Stack.Screen>
        <Stack.Screen name="Settings" options={{ headerShown: false }} component={Settings}></Stack.Screen>
        <Stack.Screen name="About" options={{ headerShown: false }} component={About}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;