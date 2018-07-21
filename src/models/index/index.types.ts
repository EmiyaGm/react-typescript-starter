export enum ActionTypes {
  ADD_COUNT = 'ADD_COUNT',
  SUBSTRACT_COUNT = 'SUBSTRACT_COUNT'
}

export enum TaskNames {
  ADD_TASK = 'ADD_TASK',
  SUBSTRACT_TASK = 'SUBSTRACT_TASK'
}

export type addCountAction = { type: ActionTypes.ADD_COUNT; payload: number };
export type substractCountAction = {
  type: ActionTypes.SUBSTRACT_COUNT;
  count: number;
};

export type IndexActions = addCountAction | substractCountAction;

export type addTask = { type: TaskNames.ADD_TASK; payload: number };
export type substractTask = { type: TaskNames.SUBSTRACT_TASK; payload: number };
