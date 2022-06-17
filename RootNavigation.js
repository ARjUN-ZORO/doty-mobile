// RootNavigation.js

import * as React from 'react';
import {StackActions} from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  console.log("Testiung", name, params, navigationRef.current);
  navigationRef.current.navigate(name, params);
}

export function push(name, params) {
  navigationRef.current &&
    navigationRef.current.dispatch(StackActions.push(name, params));
}

export function goBack() {
  navigationRef.current?.goBack();
}

// add other navigation functions that you need and export them
