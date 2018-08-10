import { ActionTypes } from './todo.types';

type Action<T, P = any> = { type: T; payload: P };

export function onInputChange(
  v: string
): Action<ActionTypes.INPUT_CHANGE, string> {
  return { type: ActionTypes.INPUT_CHANGE, payload: v };
}

export function toggleTodo(
  id: number
): Action<ActionTypes.TOGGLE_TODO, number> {
  return { type: ActionTypes.TOGGLE_TODO, payload: id };
}

export function addTodo(content: string): Action<ActionTypes.ADD_TODO, string> {
  return { type: ActionTypes.ADD_TODO, payload: content };
}

export function deleteTodo(
  id: number
): Action<ActionTypes.DELETE_TODO, number> {
  return { type: ActionTypes.DELETE_TODO, payload: id };
}
