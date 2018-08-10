import { Reducer } from 'redux';
import { ActionTypes, IndexActions } from './index.types';

export interface IndexState {
  count: number;
}

const initState = { count: 0 };

export const IndexReducer: Reducer<Readonly<IndexState>, IndexActions> = (
  state = initState,
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_COUNT:
      return { ...state, count: state.count + action.payload };
    case ActionTypes.SUBSTRACT_COUNT:
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};
