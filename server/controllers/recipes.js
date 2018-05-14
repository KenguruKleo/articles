const recipesService = require('../services/recipes-origin');

module.exports = {
  async list(req, res) {
    try {
      const queryParams = req.query || {};
      const recipes = await recipesService.fetchRecipes(queryParams);
      res.send(recipes);
    } catch (err) {
      res.status(500).end(`Error: ${err}`);
    }
  },

  async item(req, res) {
    try {
      const { id } = req.params;
      const queryParams = req.query || {};
      const recipes = await recipesService.fetchRecipesItem(id, queryParams);
      res.send(recipes);
    } catch (err) {
      res.status(500).end(`Error: ${err}`);
    }
  },
};
