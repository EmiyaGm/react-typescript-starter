import {
  loginAction,
  ActionTypes,
  logoutAction,
  startLoginTask,
  TaskNames
} from './login.types';
import { User } from '../../services/dto/dto';

export function login(user: User): loginAction {
  return { type: ActionTypes.LOG_IN, payload: user };
}

export function logout(): logoutAction {
  return { type: ActionTypes.LOG_OUT };
}

export function startLogin(username: string, password: string): startLoginTask {
  return { type: TaskNames.START_LOGIN, username, password };
}
