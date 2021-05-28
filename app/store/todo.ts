import {createSlice} from '@reduxjs/toolkit';

let lastId = 0;

export interface Todo {
  id: number;
  value: string;
}

const slice = createSlice({
  name: 'todos',
  initialState: [],

  reducers: {
    todoAdded: (todo: Todo[], action: {payload: string}) => {
      todo.push({
        id: ++lastId,
        value: action.payload,
      });
    },

    todoDeleted: (todo: Todo[], action: {payload: number}): any =>
      todo.filter(t => t.id !== action.payload),
  },
});

export const {todoAdded, todoDeleted} = slice.actions;
export default slice.reducer;
