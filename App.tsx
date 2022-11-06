/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Section } from './src/components/Section';
import { theme } from './src/theme';

const SectionTest: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({ children, title }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: Colors.dark,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'theme.bgColor'} />
      <Section style={styles.section} title="Add your info">
        <View style={styles.header}>
          <Text style={styles.subtitle}>
            To complete your profile please fill in all necessary information
          </Text>
        </View>
        <View style={styles.form}>
          <TextInput
            placeholderTextColor="#7E7F7E"
            style={styles.input}
            placeholder="First name"
          />
          <TextInput
            placeholderTextColor="#7E7F7E"
            style={styles.input}
            placeholder="Last name"
          />
          <TextInput
            placeholderTextColor="#7E7F7E"
            style={styles.input}
            placeholder="Phone number"
            keyboardType="numeric"
          />
          <TextInput
            placeholderTextColor="#7E7F7E"
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            placeholderTextColor="#7E7F7E"
            style={styles.input}
            placeholder="Age"
            keyboardType="numeric"
          />
        </View>
        <SectionTest title="Step One">
          Edit <Text style={styles.highlight}>App.tsx</Text> to change thisdsds
          screen and then come back to see your edits.
        </SectionTest>
        <SectionTest title="See Your Changes">
          <ReloadInstructions />
        </SectionTest>
        <SectionTest title="Debug">
          <DebugInstructions />
        </SectionTest>
        <SectionTest title="Learn More">
          Read the docs to discover what to do next:
        </SectionTest>
        <LearnMoreLinks />
      </Section>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: theme.bgColor,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    gap: '10px',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    marginBottom: 12,
  },
  subtitle: {
    textAlign: 'center',
    color: '#A8A8A8',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    // backgroundColor: theme.bgColor,
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 8,
  },
  input: {
    backgroundColor: '#1E1A20',
    borderColor: '#302E33',
    borderRadius: 8,
    borderWidth: 1,
    color: 'white',
    padding: 12,
    fontSize: 18,
  },
});

export default App;
