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
import { CallDetailsContext } from '../contexts/callDetails';

const url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';

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

const Results = memo(({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [translation, setTranslation] = useState('');
  const { message, resetContext } = useContext(CallDetailsContext);

  useEffect(() => {
    const getData = async () => {
      const firstResponse = await fetch(`${url}?key=${YANDEX_API_KEY}&text=${message}&lang=es`);
      const firstResults = await firstResponse.json();
      const firstTranslation = firstResults.text[0];

      const secondResponse = await fetch(`${url}?key=${YANDEX_API_KEY}&text=${firstTranslation}&lang=en`);
      const secondResults = await secondResponse.json();
      const secondTranslation = secondResults.text[0];

      setTranslation(secondTranslation);
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
              New Message: {translation}
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
