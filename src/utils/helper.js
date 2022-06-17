import {Dimensions, Platform, PixelRatio, ToastAndroid} from 'react-native';
import * as RootNavigation from '../../RootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";

// commom variable
export const BASE_URL = 'https://app.100plusmall.com/';

//  window Height
export const windowHeight = Dimensions.get('window').height;
export const windowWidth = Dimensions.get('window').width;

// common function for navigation
export const NavigateTo = (name, params) => {
  RootNavigation.navigate(name, params);
};

// common function for size
export const normalize = size => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
  // based on iphone 5s's scale
  const scale = SCREEN_WIDTH / 320;
  const newSize = size * scale;

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export const normalizeNew = size => {
  const [screenInfo, setScreenInfo] = useState(Dimensions.get('screen'));

  useEffect(() => {
    const onChange = (result) => {
      setScreenInfo(result.screen);
    }

    const listener = Dimensions.addEventListener('change', onChange);

    return () => {
      if (listener) {
      listener.remove();
      }
      setScreenInfo(Dimensions.get('window'));
    };

  }, []);

  // const scale = screenInfo.width / 320;
  // const newSize = size * scale;

  // if (Platform.OS === 'ios') {
  //   return Math.round(PixelRatio.roundToNearestPixel(newSize));
  // } else {
  //   return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  // }
  return {...screenInfo}
};

// common function for setting item in local storage
export const StoreDataLocally = async (storage_Key, value) => {
  try {
    await AsyncStorage.setItem(storage_Key, value);
  } catch (e) {
    ToastAndroid.showWithGravity(
      'Something went wrong',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
    return e;
  }
};

// common function for getting item from local storage
export const GetLocalData = async storage_Key => {
  try {
    const value = await AsyncStorage.getItem(storage_Key);
    if (value !== null) {
      return JSON.parse(value);
    } else {
      return null;
    }
  } catch (e) {
    ToastAndroid.showWithGravity(
      'Something went wrong',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
    return e;
  }
};

// common function for removing item from local storage
export const RemoveLocalData = async storage_Key => {
  try {
    await AsyncStorage.removeItem(storage_Key);
    return true;
  } catch (exception) {
    return false;
  }
};
