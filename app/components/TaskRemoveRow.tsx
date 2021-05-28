import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';

import {todoDeleted} from '../store/todo';
import AppText from './Text';

export interface TaskRemoveRowProps {
  id: number;
  value: string;
}

const TaskRemoveRow: React.FC<TaskRemoveRowProps> = ({id, value}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <AppText style={styles.text} key={id}>
        {value}
      </AppText>
      <Icon
        name="trash"
        size={40}
        color="#900"
        onPress={() => dispatch(todoDeleted(id))}
      />
    </View>
  );
};

export default TaskRemoveRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },

  text: {
    marginBottom: 10,
    marginRight: 10,
    flex: 1,
  },
});
