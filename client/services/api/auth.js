import api from './axios-config';

export default {

  getState() {
    return api.get('/get_state', { baseURL: '/auth' });
  },

  login(data) {
    return api.post('/login', data, { baseURL: '/auth' });
  },

  logout() {
    return api.get('/logout', { baseURL: '/auth' });
  },

};
