import { request } from './../../core/api';

export const loginRequest = ({ userId, password }) => {
  return request({ url: 'https://lscjks.com' });
}
