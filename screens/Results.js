import React, { memo, useContext, useState, useEffect, useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import { Button } from 'react-native-material-ui';
import { YANDEX_API_KEY } from 'react-native-dotenv';

import { sharedStyles } from '../sharedStyles';
import { CallDetailsContext } from '../contexts/callDetails';

const styles = StyleSheet.create({
  ...sharedStyles,
  sectionDescription: {
    ...sharedStyles.sectionDescription,
    marginTop: 8,
  },
});

const url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
const languages = [
  'es', 
  'ru', 
  'vi', 
  'fr', 
  'he',
];

const makeCalls = async (initialMessage, numberOfCalls) => {
  let message = initialMessage;

  for (let i = 0; i < numberOfCalls; i++) {
    const language = languages[i];
    const urlWithParams = `${url}?key=${YANDEX_API_KEY}&text=${message}&lang=${language}`;

    const response = await fetch(urlWithParams);
    const results = await response.json();
    const translation = results.text[0];

    message = translation;
    console.log(message);
  }

  const englishUrl = `${url}?key=${YANDEX_API_KEY}&text=${message}&lang=en`;
  const finalResponse = await fetch(englishUrl);
  const finalResults = await finalResponse.json();
  console.log(finalResults)

  return finalResults.text[0];
};

const Results = memo(({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [finalMessage, setFinalMessage] = useState('');
  const {
    resetContext,
    numberOfCalls,
    message,
  } = useContext(CallDetailsContext);

  useEffect(() => {
    const getData = async () => {
      const newMessage = await makeCalls(message, numberOfCalls);

      setFinalMessage(newMessage);
      setIsLoading(false);
    };

    getData();
  }, []);

  const restartCallFlow = useCallback(() => {
    resetContext();
    navigation.navigate('NumberOfCalls');
  }, [navigation]);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

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
              New Message: {finalMessage}
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
});

Results.navigationOptions = {
  title: 'Results',
  headerLeft: null,
};

export default Results;
