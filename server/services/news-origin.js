const axios = require('axios');
const querystring = require('querystring');
const base64url = require('base64-url');
const { newsResourceURL, NEWS_API_KEY } = require('../config');

let token = null;

const fetchToken = async () => ({
  access_token: NEWS_API_KEY,
});

const fetchArticles = async (queryParams = {}) => {
  if (!token) {
    token = await fetchToken();
  }
  const initParams = {
    language: 'en',
    pageSize: 20,
    page: 1,
    sortBy: 'publishedAt',
    sources: 'the-next-web',
  };
  const params = Object.assign({}, initParams, queryParams);

  const res = await axios.get(`${newsResourceURL}/everything?${querystring.stringify(params)}`, {
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  });
  return res.data;
};

const fetchArticlesItem = async (id, queryParams = {}) => {
  if (!token) {
    token = await fetchToken();
  }
  const initParams = {
    language: 'en',
    q: `"${base64url.decode(id)}"`,
    sources: 'the-next-web',
  };
  const params = Object.assign({}, initParams, queryParams);

  const res = await axios.get(`${newsResourceURL}/everything?${querystring.stringify(params)}`, {
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  });
  const { articles = [] } = res.data || {};
  return articles.length ? articles[0] : undefined;
};

const fetchSources = async (queryParams = {}) => {
  if (!token) {
    token = await fetchToken();
  }
  const initParams = {
    country: 'all',
    language: 'en',
    category: 'all',
  };
  const params = Object.assign({}, initParams, queryParams);

  const res = await axios.get(`${newsResourceURL}/sources?${querystring.stringify(params)}`, {
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  });
  return res.data;
};

module.exports = {
  fetchToken,
  fetchArticles,
  fetchArticlesItem,
  fetchSources,
};
