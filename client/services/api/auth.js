import api from './axios-config';

export default {

  login(data) {
    return api.post('/login', data, { baseURL: '/auth' });
  },

  logout() {
    return api.get('/logout', { baseURL: '/auth' });
  },

};
