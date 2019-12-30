import React, { useContext, useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
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

const Results = ({ navigation }) => {
  const { message, resetContext } = useContext(CallDetailsContext);

  const restartCallFlow = useCallback(() => {
    resetContext();
    navigation.navigate('NumberOfCalls');
  }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>
              Original Message: {message}
            </Text>
            <Text style={styles.sectionTitle}>
              New Message:
            </Text>
          </View>
          <Button
            onPress={restartCallFlow}
            style={{
              container: styles.button,
              text: styles.buttonText,
            }}
            text="Make Another Call"
            primary
            raised
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

Results.navigationOptions = {
  title: 'Results',
  headerLeft: null,
};

export default Results;
