import React, { useContext, useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import { TextField } from 'react-native-materialui-textfield';
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
    paddingHorizontal: 24,
    flex: 5,
    justifyContent: 'center',
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
  const { message, setMessage } = useContext(CallDetailsContext);
  const sendMessage = useCallback(() => navigation.navigate('Results'), [navigation]);
  const isButtonDisabled = !message || message.trim().length < 1;

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <TextField
              fontSize={25}
              labelFontSize={20}
              label="What is your message?"
              value={message}
              onChangeText={setMessage}
            />
          </View>
          <Button
            onPress={sendMessage}
            style={{
              container: styles.button,
              text: styles.buttonText,
            }}
            text="Place Call"
            primary
            raised
            disabled={isButtonDisabled}
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
