import React, { Children, cloneElement, PropsWithChildren } from 'react';
import { TextInput, View, ViewStyle } from 'react-native';

export const Form: React.FC<
  PropsWithChildren<{
    style?: ViewStyle;
    onLastOnSubmitEditing: () => void;
  }>
> = ({ children, onLastOnSubmitEditing, style }) => {
  const arrayChildren = Children.toArray(children);
  const childrenRef = React.useRef<TextInput[]>([]);

  return (
    <View style={style}>
      {Children.map(arrayChildren, (child, index) => {
        const onSubmitEditing = () => {
          if (index < arrayChildren.length - 1) {
            childrenRef.current[index + 1].focus();
          } else {
            onLastOnSubmitEditing();
          }
        };
        return cloneElement(child as any, {
          ref: (ref: TextInput) => (childrenRef.current[index] = ref),
          onSubmitEditing,
        });
      })}
    </View>
  );
};
