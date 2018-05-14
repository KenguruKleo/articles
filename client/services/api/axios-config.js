import axios from 'axios';

/** Axios configuration */
const makeInstance = () => {
  const instance = axios.create({ baseURL: '/api' });
  instance.interceptors.request.use(config => ({
    ...config,
    headers: {
      ...config.headers,
    },
    /** add timestamp to prevent IE11 cache issues */
    params: {
      ...config.params,
      t: new Date()
        .getTime(),
    },
  }));

  return instance;
};

export default makeInstance();
