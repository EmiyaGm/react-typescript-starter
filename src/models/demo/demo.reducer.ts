import { Reducer } from 'redux';
import { ActionTypes, DemoActions } from './demo.types';

export interface DemoState {
  count: number;
};

const initState = {
  count: 0
};

export const demo: Reducer<Readonly<DemoState>, DemoActions> = (state = initState, action) => {
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