import { Reducer } from 'redux';
import { ActionTypes, DemoAction } from './demo.types';

const initState = {
  count: 0
};

export type DemoState = Readonly<typeof initState>;

export const demoReducer: Reducer<DemoState, DemoAction> = (state = initState, action) => {
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