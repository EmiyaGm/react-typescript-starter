import * as constants from './demo.types';

export interface Increase {
  type: constants.INCREMENT
}

export interface Decrease {
  type: constants.DECREMENT
}

export interface Add {
  type: constants.ADD,
  payload: number;
}

export type DemoActions = Increase | Decrease | Add;

export function increase(): Increase {
  return { type: constants.INCREMENT };
}

export function decrease(): Decrease {
  return { type: constants.DECREMENT };
}

export function add(count: number): Add {
  return { type: constants.ADD, payload: count };
}