import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';

import Input from './Input';
import Button from './Button';
import {todoAdded} from '../store/todo';

export interface TaskAddRowProps {}

const TaskAddRow: React.FC<TaskAddRowProps> = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleTodoAdd = () => {
    dispatch(todoAdded(input));
    setInput('');
  };

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        value={input}
        onChangeText={value => setInput(value)}
      />
      <Button style={styles.button} onPress={handleTodoAdd} />
    </View>
  );
};

export default TaskAddRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },

  input: {
    marginRight: 10,
    flex: 1,
  },

  button: {
    flex: 0.3,
  },
});
