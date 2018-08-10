import { addCount, substractCount } from './index.action';

export enum ActionTypes {
  ADD_COUNT = 'ADD_COUNT',
  SUBSTRACT_COUNT = 'SUBSTRACT_COUNT'
}

export enum TaskNames {
  ADD_TASK = 'ADD_TASK',
  SUBSTRACT_TASK = 'SUBSTRACT_TASK'
}

export type IndexActions = ReturnType<typeof addCount | typeof substractCount>;

export type addTask = { type: TaskNames.ADD_TASK; payload: number };
export type substractTask = { type: TaskNames.SUBSTRACT_TASK; payload: number };
