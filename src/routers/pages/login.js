import Login from './../../controllers/login';
import reducer from './../../modules/auth/reducer';
import sagas from './../../modules/auth/sagas';

export default [
  {
    name: 'auth',
    path: '/',
    component: Login,
    reducer,
    sagas
  }
]