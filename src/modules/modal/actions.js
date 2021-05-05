import * as types from './types';

export const openModal = payload => ({ type: types['MODAL_OPEN'], payload });
export const closeModal = payload => ({ type: types['MODAL_CLOSE'], payload });