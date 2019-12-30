import React, { memo, useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
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

const HomeScreen = memo(({ navigation }) => {
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
});

HomeScreen.navigationOptions = {
  title: 'Welcome to Operator!',
};

export default HomeScreen;
