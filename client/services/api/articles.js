import api from './axios-config';

export default {

  fetchArticlesList(filters = {}) {
    return api.get('/articles', filters);
  },

  fetchArticlesItem(id, filters = {}) {
    return api.get(`/articles/${id}`, filters);
  },

};
