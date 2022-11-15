import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useForm } from 'react-hook-form';
import Animated, {
  FadeInUp,
  FadeOutDown,
  FadeInDown,
  FadeOutUp,
} from 'react-native-reanimated';

import { Button } from '../components/Button';
import { Section } from '../components/Section';
import { Input } from '../components/Input';
import { Form } from '../components/Form';
import { theme } from '../theme';

export const ProfileDetails = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: null,
      age: null,
    },
  });
  const [isSuccess, setFormSuccess] = React.useState(true);

  const inputProps = { control, errors, required: true, style: styles.input };

  const onSubmit = async () => {
    setFormSuccess(Math.random() < 0.5);
  };

  const handleReset = () => {
    reset();
    setFormSuccess(false);
  };

  return (
    <>
      {!isSubmitSuccessful && (
        <Animated.View
          entering={FadeInUp.duration(300).delay(350)}
          exiting={FadeOutUp.duration(300)}>
          <Section style={styles.section} title="Add your info">
            <Text style={styles.subtitle}>
              To complete your profile please fill in all necessary information
            </Text>
            <Form
              onLastOnSubmitEditing={handleSubmit(onSubmit)}
              style={styles.form}>
              <Input
                placeholder="First name"
                name="firstName"
                {...inputProps}
              />
              <Input placeholder="Last name" name="lastName" {...inputProps} />
              <Input
                placeholder="Phone number"
                keyboardType="numeric"
                name="phone-number"
                {...inputProps}
                // TODO: add phone validation
              />
              <Input
                placeholder="Email"
                keyboardType="email-address"
                name="email"
                {...inputProps}
                // TODO: add email regex validation
              />
              <Input
                placeholder="Age"
                keyboardType="numeric"
                name="age"
                {...inputProps}
                // TODO: add numeric validation
              />
            </Form>

            <Button
              title="Submit"
              disabled={!isValid}
              onPress={handleSubmit(onSubmit)}
              style={styles.button}
            />
          </Section>
        </Animated.View>
      )}
      {isSubmitSuccessful && (
        <Animated.View
          entering={FadeInDown.duration(300).delay(350)}
          exiting={FadeOutDown.duration(300)}>
          <Section
            style={styles.section}
            title={isSuccess ? 'Success' : 'Oooopsy'}>
            <Text style={styles.subtitle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus vitae illum repudiandae consequuntur laborum ratione,
              omnis blanditiis amet cumque nisi quaerat, exercitationem
              perspiciatis, voluptates assumenda. Ullam eos dolorem nemo natus?
            </Text>
            <Button
              title="Start over"
              onPress={handleReset}
              variant="secondary"
              style={styles.button}
            />
          </Section>
        </Animated.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  section: {
    display: 'flex',
  },
  subtitle: {
    textAlign: 'center',
    color: theme.colors.bodyText,
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
  form: {
    marginTop: 36,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 24,
  },
});
