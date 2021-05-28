import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export interface CommentProps {
  email: string;
  body: string;
  style?: object;
}

const Comment: React.FC<CommentProps> = ({email, style, body}) => {
  return (
    <View style={style}>
      <View style={styles.header}>
        <Icon style={styles.icon} size={80} name="user" />
        <Text style={styles.text}>{email}</Text>
      </View>
      <Text style={styles.comment}>{body}</Text>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },

  icon: {},

  text: {
    flex: 1,
    maxWidth: '100%',
  },

  comment: {
    padding: 18,
    fontSize: 17,
  },
});
