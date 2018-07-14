import { ActionTypes } from './demo.types';

export function increase() {
  return { type: ActionTypes.INCREMENT };
}

export function decrease() {
  return { type: ActionTypes.DECREMENT };
}

export function add(count: number) {
  return { type: ActionTypes.ADD, payload: count };
}

export function increaseAsync() {
  return { type: ActionTypes.INCREMENT_ASYNC };
}

export function addAsync(count: number) {
  return { type: ActionTypes.ADD_ASYNC, payload: count };
}