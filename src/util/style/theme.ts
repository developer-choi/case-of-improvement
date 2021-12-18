import type {DefaultTheme} from 'styled-components';

export const COLORS = {
  reactBlue: 'rgb(97, 218, 251)',
  black1: '#1a1a1a',
  black2: '#20232a',
  gray1: '#f7f7f7',
};

export const theme: DefaultTheme = {
  main: COLORS.reactBlue,
  error: 'red',
  font: {
    basicNormal: COLORS.black1,
    basicLight: '#6d6d6d'
  },
};
