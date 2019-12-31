import React, { memo, useContext, useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import { TextField } from 'react-native-materialui-textfield';
import { Button } from 'react-native-material-ui';

import { sharedStyles } from '../sharedStyles';
import { CallDetailsContext } from '../contexts/callDetails';

const styles = StyleSheet.create({
  ...sharedStyles,
  sectionContainer: {
    ...sharedStyles.sectionContainer,
    marginTop: 0,
    justifyContent: 'center',
  },
});

const CallMessage = memo(({ navigation }) => {
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
});

CallMessage.navigationOptions = {
  title: 'Message',
};

export default CallMessage;
