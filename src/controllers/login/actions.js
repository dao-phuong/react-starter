import * as types from './types';

export const loginRequest = payload => ({ type: types['LOGIN_REQUEST'], payload });
export const loginSucess = payload => ({ type: types['LOGIN_SUCCESS'], payload });
export const loginError = payload => ({ type: types['LOGIN_ERROR'], payload });
