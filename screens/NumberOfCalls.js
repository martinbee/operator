import React, { useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { Button } from 'react-native-material-ui';

// store results in a context
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

const NumberOfCalls = ({ navigation }) => {
  const goToCallMessage = useCallback(() => navigation.navigate('CallMessage'), [navigation]);

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>
              How many calls do you want your message to go through?
            </Text>
            <Slider
              style={{ width: 200, height: 40 }}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />
          </View>
          <Button
            onPress={goToCallMessage}
            style={{
              container: styles.button,
              text: styles.buttonText,
            }}
            text="Next"
            primary
            raised
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

NumberOfCalls.navigationOptions = {
  title: 'Number of Calls',
  headerLeft: null,
};

export default NumberOfCalls;
