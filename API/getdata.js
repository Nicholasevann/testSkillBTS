import AsyncStorage from '@react-native-async-storage/async-storage';

const getdata = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('token');
    return JSON.parse(jsonValue);
  } catch (e) {
    console.log('failed to store data');
  }
};

export default getdata;
