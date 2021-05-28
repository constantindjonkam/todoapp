import {createSlice} from '@reduxjs/toolkit';

import {apiCallBegan} from './api';
import {CommentProps} from '../components/Comment';

export interface CommentState {
  list: CommentProps[];
  loading?: boolean;
  lastFetch?: Number | null;
}

const slice = createSlice({
  name: 'comments',
  initialState: {list: [], loading: false, lastFetch: null},

  reducers: {
    commentsRecieved: (
      comments: CommentState,
      action: {payload: CommentProps[]},
    ) => {
      comments.list = action.payload;
      comments.loading = false;
      comments.lastFetch = Date.now();
    },

    commentsRequested: (comments: CommentState) => {
      comments.loading = true;
    },

    commentsRequestFailed: (comments: CommentState) => {
      comments.loading = false;
    },
  },
});

export const {commentsRecieved, commentsRequested, commentsRequestFailed} =
  slice.actions;
export default slice.reducer;

// Custom Action creators
const url = '/comments?_limit=10';

export const loadcomments = () => (dispatch: any, getState: any) => {
  const {lastFetch} = getState().entities.comments;

  const diff = Math.abs((new Date() as any) - lastFetch);
  console.log('diff', diff / 1000 / 60);
  if (diff / 60000 < 10) return;

  dispatch(
    apiCallBegan({
      url,
      onSuccess: commentsRecieved.type,
      onError: commentsRequestFailed.type,
      onStart: commentsRequested.type,
    }),
  );
};
