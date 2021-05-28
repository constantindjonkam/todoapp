import {CommentProps} from '../components/Comment';
import {Todo} from './todo';

export interface Store {
  entities: {
    todos: Todo[];
    comments: CommentProps[];
  };
}
