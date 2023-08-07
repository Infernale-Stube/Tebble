import StackNavigator from "./navigation/StackNavigator";
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    'BungeeSpice': require('./assets/fonts/BungeeSpice-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <StackNavigator />
  );
}
