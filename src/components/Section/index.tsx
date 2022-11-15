import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { Header } from '../Header';

export const Section: React.FC<
  PropsWithChildren<{
    style?: ViewStyle;
    title: string;
  }>
> = ({ children, style, title }) => {
  const translationY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      translationY.value = event.contentOffset.y > 80 ? 1 : 0;
    },
  });

  return (
    <View style={styles.container}>
      <Header y={translationY}>{title}</Header>
      <Animated.ScrollView
        contentContainerStyle={[styles.inner, style]}
        onScroll={scrollHandler}
        scrollEventThrottle={16}>
        <Text style={styles.title}>{title}</Text>
        {children}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    height: '100%',
  },
  inner: {
    paddingHorizontal: 18,
    paddingVertical: 24,
  },
  header: {},
  title: {
    textAlign: 'center',
    marginTop: 74,
    marginBottom: 18,
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  subtitle: {
    textAlign: 'center',
  },
});
