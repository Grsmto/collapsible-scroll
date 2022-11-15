import React from 'react';
import { Controller } from 'react-hook-form';
import { TextInputProps, StyleSheet, TextInput } from 'react-native';

interface Props extends TextInputProps {
  control: any;
  required?: boolean;
  name: string;
  errors: any;
}

export const Input = React.forwardRef<TextInput, Props>(
  (
    {
      control,
      required = false,
      name,
      errors,
      placeholder,
      style,
      ...otherProps
    },
    ref,
  ) => {
    const [isFocused, setFocused] = React.useState(false);

    return (
      <Controller
        control={control}
        rules={{
          required,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.input,
              style,
              isFocused && styles.inputFocus,
              errors[name] && styles.inputError,
            ]}
            onBlur={() => {
              onBlur();
              setFocused(false);
            }}
            blurOnSubmit={false}
            ref={ref}
            returnKeyType="next"
            onChangeText={onChange}
            onFocus={() => setFocused(true)}
            value={value}
            accessibilityLabel={placeholder}
            placeholderTextColor="#7E7F7E"
            placeholder={placeholder}
            {...otherProps}
          />
        )}
        name={name}
      />
    );
  },
);

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#1E1A20',
    borderColor: '#302E33',
    borderRadius: 8,
    borderWidth: 1,
    color: 'white',
    padding: 12,
    fontSize: 18,
  },
  inputFocus: {
    borderColor: '#4F51B2',
  },
  inputError: {
    borderColor: 'red',
  },
});
