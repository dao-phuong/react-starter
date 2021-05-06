import Immutable from 'seamless-immutable';
import * as types from './types';

const initialState = Immutable({
  user: {},
  success: false,
  async: false,
  isLogin: true
});

const loginRequest = (action, state) => {
  console.log('action', action);
  return state.merge({ async: true })
}

const loginSucess = (action, state) => {
  const { result } = action.payload;
  return state.merge({ success: true, async: false })
}

const loginError = (action, state) => {
  return state.merge({ success: false, async: false })
}

const dispatch = {
  [types.LOGIN_REQUEST]: loginRequest,
  [types.LOGIN_SUCCESS]: loginSucess,
  [types.LOGIN_ERROR]: loginError,
};

export default (state, action) => {
  if(typeof state === "undefined"){
    return initialState;
  }
  return (typeof dispatch[action.type]==='function')?dispatch[action.type](action, state):state;
}