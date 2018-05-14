import api from './axios-config';

export default {

  fetchRecipesList(filters = {}) {
    return api.get('/recipes', filters);
  },

  fetchRecipesItem(id, filters = {}) {
    return api.get(`/recipes/${id}`, filters);
  },

};
