import auth from './auth';
import articles from './articles';

const Api = {
  ...auth,
  ...articles,
};

export default Api;
