export enum ActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  ADD = 'ADD'
}

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