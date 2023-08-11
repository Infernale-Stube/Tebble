import AsyncStorage from '@react-native-async-storage/async-storage';

const CURRENT_LEVEL_KEY = 'currentLevel';

const isInitialLevelSet = async () => {
  try {
    const value = await AsyncStorage.getItem(CURRENT_LEVEL_KEY);
    return value !== null;
  } catch (error) {
    console.error('Error checking initial value:', error);
    return false;
  }
};

export const setInitialLevel = async () => {
  const initialValueSet = await isInitialLevelSet();

  if (!initialValueSet) {
    try {
      await AsyncStorage.setItem(CURRENT_LEVEL_KEY, '1');
    } catch (error) {
      console.error('Error setting initial value:', error);
    }
  }
};

export const unlockNextLevel = async () => {
  try {
    const currentLevel = await AsyncStorage.getItem(CURRENT_LEVEL_KEY);
    const newLevel = parseInt(currentLevel, 10) + 1;
    await AsyncStorage.setItem(CURRENT_LEVEL_KEY, newLevel.toString());
    return newLevel;
  } catch (error) {
    console.error('Error unlocking next level:', error);
  }
};