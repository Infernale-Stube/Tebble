import AsyncStorage from '@react-native-async-storage/async-storage';

const CAMPAIGN_LEVEL = '@campaignLevel';

export const saveCampaignLevel = async (level) => {
  await AsyncStorage.setItem(CAMPAIGN_LEVEL, level.toString());
};

export const loadCampaignLevel = async () => {
  const level = await AsyncStorage.getItem(CAMPAIGN_LEVEL);
  return level ? parseInt(level) : 1;
};
