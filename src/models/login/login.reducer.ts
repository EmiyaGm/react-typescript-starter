import { Reducer } from 'redux';
import { ActionTypes, LoginActions } from './login.types';

export interface LoginState {
  status: boolean;
  user?: { name: string; mobile: string };
}

const initState = { status: false };

export const LoginReducer: Reducer<Readonly<LoginState>, LoginActions> = (
  state = initState,
  action
) => {
  switch (action.type) {
    case ActionTypes.LOG_IN:
      return { ...state, status: true, user: action.payload };
    case ActionTypes.LOG_OUT:
      return { ...state, status: false };
    default:
      return state;
  }
};
