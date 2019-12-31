import React, { memo, useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import { Button } from 'react-native-material-ui';
import { sharedStyles } from '../sharedStyles';

// refactor this with styledComponents
const styles = StyleSheet.create({
  ...sharedStyles,
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
