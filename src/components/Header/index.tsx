import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text } from 'react-native';
import Animated, {
  useAnimatedStyle,
  SharedValue,
  withTiming,
  Easing,
  withDelay,
} from 'react-native-reanimated';
import { theme } from '../../theme';

const headerHeight = 63;

export const Header: React.FC<
  PropsWithChildren<{ y: SharedValue<number> }>
> = ({ children, y }) => {
  const containerAnim = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withDelay(
            y.value ? 0 : 100,
            withTiming(-headerHeight + y.value * headerHeight, {
              duration: 250,
              easing: Easing.inOut(Easing.ease),
            }),
          ),
        },
      ],
    };
  });

  const textAnim = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withDelay(
            y.value ? 100 : 0,
            withTiming(180 + y.value * -180, {
              duration: 500,
              easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
          ),
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.header, containerAnim]}>
      <Animated.View style={textAnim}>
        <Text style={styles.title} aria-hidden>
          {children}
        </Text>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    width: '100%',
    height: headerHeight - 1,
    overflow: 'hidden',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#211F1F',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.heading,
  },
});
