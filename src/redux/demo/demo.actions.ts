import { ActionTypes, Add, Decrease, Increase } from './demo.types';

export function increase(): Increase {
  return { type: ActionTypes.INCREMENT };
}

export function decrease(): Decrease {
  return { type: ActionTypes.DECREMENT };
}

export function add(count: number): Add {
  return { type: ActionTypes.ADD, payload: count };
}

export type DemoActionCreators =
  typeof increase |
  typeof decrease |
  typeof add;