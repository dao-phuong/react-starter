import Immutable from 'seamless-immutable';
import * as types from './types';

var initialState = Immutable({
  modalName: {}
});

const openModal = (action, state) => {
    return state.setIn(['modalName', action.payload.modalName], true);
}

const closeModal = (action, state) => {
    return state.set('modalName', {});
}


const dispatch = {
  [types.MODAL_OPEN]: openModal,
  [types.MODAL_CLOSE]: closeModal
};

export default (state, action) => {
  if(typeof state === "undefined"){
      return initialState;
  }
  return (typeof dispatch[action.type] ==='function') ? dispatch[action.type](action, state) : state;
}