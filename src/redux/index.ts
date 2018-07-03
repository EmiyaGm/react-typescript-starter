import { combineReducers } from 'redux';
import { demoReducer } from './demo/demo.reducer';

export const rootReducer = combineReducers({
  demo: demoReducer
});