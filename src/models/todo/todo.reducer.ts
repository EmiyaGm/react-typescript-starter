import { Reducer } from 'redux';
import { ActionTypes, TodoAction } from './todo.types';

export interface TodoState {
  input: string;
  todos: Array<{ id: number; content: string; isDone: boolean }>;
}

const initState = {
  input: '',
  todos: []
};

export const TodoReducer: Reducer<Readonly<TodoState>, TodoAction> = (
  state = initState,
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return {
        ...state,
        input: '',
        todos: [
          ...state.todos,
          {
            content: action.payload,
            id: state.todos.length + 1,
            isDone: false
          }
        ]
      };
    case ActionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload)
      };
    case ActionTypes.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(
          item =>
            item.id === action.payload
              ? { ...item, isDone: !item.isDone }
              : item
        )
      };
    case ActionTypes.INPUT_CHANGE:
      return { ...state, input: action.payload };
  }
  return state;
};
