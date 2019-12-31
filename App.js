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
import { Colors } from './sharedStyles';

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  },
  colors: {
    ...Colors,
  },
  button: {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 22,
    },
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
