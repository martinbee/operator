import React from 'react';
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';
import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home';
import NumberOfCalls from './screens/NumberOfCalls';
import CallMessage from './screens/CallMessage';
import Results from './screens/Results';
import { CallDetailsProvider } from './contexts/callDetails';

// store results in a context
// prohibit moving forward unless values are picked (number of calls)
// extract styles out to share them
// when message is sent:
  // navigate to modal
  // show loading screen
  // for now only parse through one translation
  // parse then show result
  // x goes back to main screen and cleans context

// home screen with get started - layer 1
// ask for number of translations desired - layer 2
// ask for input - layer 3
// show results - modal

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
    Results,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => (
  <ThemeContext.Provider value={getTheme(uiTheme)}>
    <CallDetailsProvider>
      <StatusBar barStyle="dark-content" />
      <AppContainer />
    </CallDetailsProvider>
  </ThemeContext.Provider>
);

export default App;
