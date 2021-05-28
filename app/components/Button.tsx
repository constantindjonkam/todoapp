import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

export interface ButtonProps {
  onPress: () => void;
  style?: object;
}

const AppButton: React.FC<ButtonProps> = ({onPress, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Button title="Add" color="#3ded97" onPress={() => onPress()} />
    </View>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {},
});
