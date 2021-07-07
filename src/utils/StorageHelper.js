import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeData = async (key,value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      
    }
  }

  export const storeJSONData = async (key,value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
      // saving error
    }
  }

  export const getData = async (key) => {
    try {
      return value;
    } catch(e) {
      return null;
    }
  }

  export const getJSONData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      return null;
    }
  }
