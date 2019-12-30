import React from 'react';
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';
import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home';
import NumberOfCalls from './screens/NumberOfCalls';
import CallMessage from './screens/CallMessage';

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  },
  colors: {
    primary: '#1292B4',
    white: '#FFF',
    lighter: '#F3F3F3',
    light: '#DAE1E7',
    dark: '#444',
    black: '#000',
  },
};

const AppNavigator = createStackNavigator(
  {
    Home,
    NumberOfCalls,
    CallMessage,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => (
  <ThemeContext.Provider value={getTheme(uiTheme)}>
    <StatusBar barStyle="dark-content" />
    <AppContainer />
  </ThemeContext.Provider>
);

export default App;
