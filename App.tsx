import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';

import {Store} from './app/store/types';
import TaskAddRow from './app/components/TaskAddRow';
import TaskRemoveRow from './app/components/TaskRemoveRow';
import Comments from './app/components/Comments';

const App = () => {
  const todoList = useSelector((state: Store) => state.entities.todos);
  console.log('list', todoList);

  return (
    <SafeAreaView style={styles.app}>
      <Text style={styles.title}>Make your To Do list below</Text>
      {todoList.map(todo => (
        <TaskRemoveRow key={todo.id} id={todo.id} value={todo.value} />
      ))}
      <TaskAddRow />
      <Text style={styles.title}>Load comments below</Text>
      <Comments style={styles.comments} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    flex: 1,
  },

  title: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 18,
  },

  comments: {
    marginBottom: 40,
    flex: 1,
  },
});

export default App;
