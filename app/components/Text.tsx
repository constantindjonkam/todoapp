import React from 'react';
import {StyleSheet, Text} from 'react-native';

export interface TextProps {
  children: string;
  style?: object;
}

const AppText: React.FC<TextProps> = ({children, style}) => {
  return <Text style={[styles.container, style]}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  container: {
    color: 'white',
    backgroundColor: '#87ceeb',
    borderRadius: 15,
    padding: 5,
    fontSize: 24,
    textAlign: 'center',
  },
});
