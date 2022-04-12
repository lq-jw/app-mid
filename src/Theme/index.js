import { DefaultTheme } from '@react-navigation/native';

const MyTheme = {
   ...DefaultTheme,
   colors: {
     ...DefaultTheme.colors,
    light400: '#a8a29e',
    primary700: '#0e7490',
    primary100: '#cffafe',
    darkTab: "#D2C1F3",
    lightTab: "#353552",
    lightAccount: "#121212"
  },
};

export default MyTheme;