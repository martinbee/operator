import React, { useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
} from 'react-native';
import { Button } from 'react-native-material-ui';

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

const CallMessage = ({ navigation }) => {
  const sendMessage = useCallback(() => console.log('did it'), []);

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>
              What is your message?
            </Text>
            <TextInput />
          </View>
          <Button
            onPress={sendMessage}
            style={{
              container: styles.button,
              text: styles.buttonText,
            }}
            text="Send Message"
            primary
            raised
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

CallMessage.navigationOptions = {
  title: 'Message',
};

export default CallMessage;
