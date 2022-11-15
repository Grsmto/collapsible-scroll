import React, { PropsWithChildren } from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  ButtonProps,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type variants = 'secondary' | 'primary';

const getVariant = (variant: variants) => {
  switch (variant) {
    case 'primary':
      return {
        gradient: ['#852642', '#B43860'],
      };
    case 'secondary':
      return {
        gradient: ['#1E1E1E', '#1E1E1E'],
      };
  }
};

interface Props extends ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: variants;
  style?: ViewStyle;
}

export const Button: React.FC<PropsWithChildren<Props>> = ({
  title,
  disabled = false,
  onPress,
  variant = 'primary',
  style,
}) => {
  const variantStyles = getVariant(variant);

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      testID={`${title}_button${disabled ? '_disabled' : ''}`}
      style={({ pressed }) => {
        return [{ opacity: pressed || disabled ? 0.6 : 1 }, style];
      }}>
      <LinearGradient
        colors={variantStyles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 13,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
});
