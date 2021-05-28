import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export interface InputProps {
  onChangeText: (value: string) => void;
  value: string;
  style?: object;
}

const Input: React.FC<InputProps> = ({onChangeText, value, style}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={[styles.input, style]}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'lightgrey',
    borderRadius: 4,
    paddingHorizontal: 15,
    maxHeight: 42,
    fontSize: 18,
  },
});
