import React, { memo, useContext, useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { Button } from 'react-native-material-ui';

import { sharedStyles } from '../sharedStyles';
import { CallDetailsContext } from '../contexts/callDetails';

const styles = StyleSheet.create({
  ...sharedStyles,
  sectionTitle: {
    ...sharedStyles.sectionTitle,
    flex: 2,
  },
  slider: {
    height: 40,
  },
  numberOfCallsText: {
    textAlign: 'center',
    fontSize: 25,
  },
});

const NumberOfCalls = memo(({ navigation }) => {
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
                maximumValue={5}
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
});

NumberOfCalls.navigationOptions = {
  title: 'Number of Calls',
  headerLeft: null,
};

export default NumberOfCalls;
