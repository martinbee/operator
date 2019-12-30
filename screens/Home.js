import React, { useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import { Button } from 'react-native-material-ui';

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

const Colors = {
  primary: '#1292B4',
  white: '#FFF',
  lighter: '#F3F3F3',
  light: '#DAE1E7',
  dark: '#444',
  black: '#000',
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  scrollViewContainer: {
    display: 'flex',
    flex: 1,
  },
  body: {
    flex: 1,
    display: 'flex',
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 24,
    flex: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 22,
  },
});

const HomeScreen = ({ navigation }) => {
  const goToNumberOfCalls = useCallback(() => navigation.navigate('NumberOfCalls'), [navigation]);

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionDescription}>
              Operator is a digital version of the game telephone.
            </Text>
          </View>
          <Button
            onPress={goToNumberOfCalls}
            style={{
              container: styles.button,
              text: styles.buttonText,
            }}
            text="Get Started!"
            primary
            raised
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

HomeScreen.navigationOptions = {
  title: 'Welcome to Operator!',
};

export default HomeScreen;
