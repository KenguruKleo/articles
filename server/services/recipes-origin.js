const axios = require('axios');
const querystring = require('querystring');

const recipesURL = 'https://gw.hellofresh.com';

let token = null;

const fetchToken = async () => {
  const data = {
    client_id: 'hellofresh-dev-test',
    client_secret: 'g4c25EzG4#%Afeh07Bb#anbH5BQQ67bJ7!G6QZOA',
    grant_type: 'client_credentials',
    scope: 'public',
  };
  const res = await axios.post(`${recipesURL}/auth/token`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.data;
};

const fetchRecipes = async (queryParams = {}) => {
  if (!token) {
    token = await fetchToken();
  }
  const initParams = {
    country: 'us',
    locale: 'en-US',
    limit: 9,
    cuisine: 'italian',
    order: '-rating',
  };
  const params = Object.assign({}, initParams, queryParams);

  const res = await axios.get(`${recipesURL}/api/recipes/search?${querystring.stringify(params)}`, {
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  });
  return res.data;
};

const fetchRecipesItem = async (id, queryParams = {}) => {
  if (!token) {
    token = await fetchToken();
  }
  const initParams = {
    locale: 'en-US',
  };
  const params = Object.assign({}, initParams, queryParams);

  const res = await axios.get(`${recipesURL}/api/recipes/${id}?${querystring.stringify(params)}`, {
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  });
  return res.data;
};

const fetchCuisines = async (queryParams = {}) => {
  if (!token) {
    token = await fetchToken();
  }
  const initParams = {
    country: 'us',
    locale: 'en-US',
    take: 'all',
  };
  const params = Object.assign({}, initParams, queryParams);

  const res = await axios.get(`${recipesURL}/api/cuisines?${querystring.stringify(params)}`, {
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  });
  return res.data;
};

module.exports = {
  fetchToken,
  fetchRecipes,
  fetchRecipesItem,
  fetchCuisines,
};
