import React, { useContext, useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { Button } from 'react-native-material-ui';
import { CallDetailsContext } from '../contexts/callDetails';

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
    flex: 2,
  },
  slider: {
    height: 40,
  },
  numberOfCallsText: {
    textAlign: 'center',
    fontSize: 25,
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
  const { numberOfCalls, setNumberOfCalls } = useContext(CallDetailsContext);
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
            <View style={{ flex: 1 }}>
              <Slider
                value={numberOfCalls}
                onValueChange={setNumberOfCalls}
                style={styles.slider}
                minimumValue={1}
                maximumValue={10}
                step={1}
                minimumTrackTintColor="#eeee"
                maximumTrackTintColor="#000000"
              />
              <Text style={styles.numberOfCallsText}>
                {numberOfCalls}
              </Text>
            </View>
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
