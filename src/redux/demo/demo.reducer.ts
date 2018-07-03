import { DemoActions } from './demo.actions';
import * as constants from './demo.types';

type DemoState = constants.DemoState;

const initState: DemoState = {
  count: 0
};

export function demoReducer(state: DemoState = initState, action: DemoActions): DemoState {
  switch (action.type) {
    case constants.INCREMENT:
      return { ...state, count: state.count + 1 };
    case constants.DECREMENT:
      return { ...state, count: state.count - 1 };
    case constants.ADD:
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
}