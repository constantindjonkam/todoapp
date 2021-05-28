import React from 'react';
import {
  Button,
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {loadcomments, CommentState} from '../store/comment';
import {Store} from '../store/types';
import Comment from './Comment';

export interface CommentsProps {
  style?: object;
}

const Comments: React.FC<CommentsProps> = ({style}) => {
  const store = useSelector((state: Store) => state.entities.comments);
  const dispatch = useDispatch();

  const comments = store as unknown;
  const {list, loading} = comments as CommentState;

  // @ts-ignore
  const renderItem = ({item}) => (
    <Comment email={item.email} body={item.body} />
  );

  return (
    <View style={style}>
      <Button
        title="Load Comments"
        color="blue"
        onPress={() => dispatch(loadcomments())}
      />
      <View style={styles.comments}>
        {loading && <ActivityIndicator size="large" color="grey" />}
        <FlatList
          data={list} // @ts-ignore
          renderItem={renderItem}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  separator: {
    borderTopColor: 'grey',
    borderTopWidth: 1,
  },

  comments: {
    marginTop: 20,
  },
});
