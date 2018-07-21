import {
  ActionTypes,
  TaskNames,
  addCountAction,
  substractCountAction,
  addTask,
  substractTask
} from './index.types';

export function addCount(count: number): addCountAction {
  return { type: ActionTypes.ADD_COUNT, payload: count };
}

export function substractCount(count: number): substractCountAction {
  return { type: ActionTypes.SUBSTRACT_COUNT, count };
}

export function add(count: number): addTask {
  return { type: TaskNames.ADD_TASK, payload: count };
}

export function substract(count: number): substractTask {
  return { type: TaskNames.SUBSTRACT_TASK, payload: count };
}
