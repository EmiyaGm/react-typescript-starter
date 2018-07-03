import { DemoActions } from './demo.actions';
import { ActionTypes } from './demo.types';

export interface DemoState {
  count: number;
}

const initState: DemoState = {
  count: 0
};

export function demoReducer(state: DemoState = initState, action: DemoActions): DemoState {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ActionTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ActionTypes.ADD:
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
}