import auth from './auth';
import recipes from './recipes';

const Api = {
  ...auth,
  ...recipes,
};

export default Api;
