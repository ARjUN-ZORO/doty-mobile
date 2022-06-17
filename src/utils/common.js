import {normalize} from './helper';

export const color = {
  primary: {
    100: '#8FC0E1',
    500: '#3387C5',
    900: '#04809C',
  },
  secondary: {
    100: '#AAD6E1',
    500: '#610065',
    900: '#1E0048',
  },
  danger: {
    100: '#F0B5A5',
    500: '#BB0000',
    900: '#820000',
  },
  warning: {
    100: '#EFCD83',
    500: '#E69B00',
    900: '#D05A00',
  },
  success: {
    100: '#CFDCB2',
    500: '#649000',
    900: '#0F3F00',
  },
  default: '#FFFFFF',
  light: '#FCF9F3',
  transparent: 'transparent',
  black: '#0B0B0B',
  darkBlack: '#000000',
  white: '#FFFFFF',
  gray: {
    50: '#e5e2dd',
    100: '#828282',
    200: '#BDBDBD',
    500: '#4F4F4F',
    900: '#C4C4C4',
  },
  purple: {
    100: '#E1C1E7',
    200: '#CCAACB',
    500: '#610065',
  },
  skyBlue: {
    100: '#CFEBF7',
    200: '#E1F6FE',
  }
};

export const size = {
  x8: normalize(8),
  x10: normalize(10),
  x10: normalize(11),
  x12: normalize(12),
  x14: normalize(14),
  x16: normalize(16),
  x18: normalize(18),
  x20: normalize(20),
  x22: normalize(22),
  x24: normalize(24),
  x26: normalize(26),
  x28: normalize(28),
  x30: normalize(30),
  x32: normalize(32),
};
