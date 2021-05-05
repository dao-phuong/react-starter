import { combineReducers } from 'redux';
import { reducer } from './../routers';
import { reducer as reduxReducerForm } from 'redux-form';
import modalReducer from './../modules/modal/reducer';

export default function createReducer(asyncReducer){
  return combineReducers({
    ...reducer,
    form: reduxReducerForm,
    ...asyncReducer,
    modal: modalReducer
  });
}
