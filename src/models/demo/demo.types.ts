export enum ActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  ADD = 'ADD',

  INCREMENT_ASYNC = 'INCREMENT_ASYNC',
  ADD_ASYNC = 'ADD_ASYNC'
}

export interface Increase {
  type: ActionTypes.INCREMENT;
}

export interface Decrease {
  type: ActionTypes.DECREMENT;
}

export interface Add {
  type: ActionTypes.ADD;
  payload: number;
}

export type DemoAction = Increase | Decrease | Add;
