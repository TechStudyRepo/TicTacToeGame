import { combineReducers } from 'redux';
import { registerUser } from './registerUser';
import { result } from './result';

export const rootReducer = combineReducers({ registerUser, result });