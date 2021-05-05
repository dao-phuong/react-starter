import Login from './../../controllers/login';
import reducer from './../../controllers/login/reducer';
import sagas from './../../controllers/login/sagas';

export default [
  {
    name: 'auth',
    path: '/auth/login',
    component: Login,
    reducer,
    sagas
  }
]