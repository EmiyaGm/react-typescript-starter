import { ActionTypes, TaskNames } from './index.types';

type Action<T, P = any> = { type: T; payload: P };

export function addCount(count: number): Action<ActionTypes.ADD_COUNT, number> {
  return { type: ActionTypes.ADD_COUNT, payload: count };
}

export function substractCount(
  count: number
): Action<ActionTypes.SUBSTRACT_COUNT, number> {
  return { type: ActionTypes.SUBSTRACT_COUNT, payload: count };
}

export function add(count: number): Action<TaskNames.ADD_TASK, number> {
  return { type: TaskNames.ADD_TASK, payload: count };
}

export function substract(
  count: number
): Action<TaskNames.SUBSTRACT_TASK, number> {
  return { type: TaskNames.SUBSTRACT_TASK, payload: count };
}
