import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import createReducer from './reducer';

export function configureStore(initialState){

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(createReducer(), composeEnhancers(applyMiddleware(sagaMiddleware)));

  store.runSaga = sagaMiddleware.run;

  store.runSaga(rootSaga);

  store.asyncReducers = {};

  // @for debug
  store.subscribe(()=>{
    // console.log(store.getState());
  })
  return store;
}

export function injectReducer(store, reducerName, asyncReducer){
  store.asyncReducers[reducerName] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
}

export default configureStore();