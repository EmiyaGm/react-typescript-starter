import { ActionTypes } from './demo.types';

export interface Increase {
  type: ActionTypes.INCREMENT
}

export interface Decrease {
  type: ActionTypes.DECREMENT
}

export interface Add {
  type: ActionTypes.ADD,
  payload: number;
}

export type DemoActions = Increase | Decrease | Add;

export function increase(): Increase {
  return { type: ActionTypes.INCREMENT };
}

export function decrease(): Decrease {
  return { type: ActionTypes.DECREMENT };
}

export function add(count: number): Add {
  return { type: ActionTypes.ADD, payload: count };
}