import { User } from '../../services/dto/dto';

export enum ActionTypes {
  LOG_IN = 'LOG_IN',
  LOG_OUT = 'LOG_OUT'
}

export enum TaskNames {
  START_LOGIN = 'START_LOGIN',
  START_LOGOUT = 'START_LOGOUT'
}

export type loginAction = { type: ActionTypes.LOG_IN; payload: User };
export type logoutAction = { type: ActionTypes.LOG_OUT };

export type LoginActions = loginAction | logoutAction;

export type startLoginTask = {
  type: TaskNames.START_LOGIN;
  username: string;
  password: string;
};
