import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { theme } from './src/theme';

import { ProfileDetails } from './src/views/ProfileDetails';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'theme.bgColor'} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ProfileDetails />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.bgColor,
  },
});

export default App;
