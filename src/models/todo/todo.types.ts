import { onInputChange, addTodo, toggleTodo, deleteTodo } from './todo.action';

export enum ActionTypes {
  INPUT_CHANGE = 'INPUT_CHANGE',
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  DELETE_TODO = 'DELETE_TODO'
}

export type TodoAction = ReturnType<
  typeof onInputChange | typeof addTodo | typeof toggleTodo | typeof deleteTodo
>;
